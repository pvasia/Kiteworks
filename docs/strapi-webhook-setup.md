# Strapi Webhook Setup Guide

This guide will help you set up Strapi webhooks to automatically revalidate your Next.js application when content changes.

## Prerequisites

Before setting up webhooks, ensure you have:

1. **Strapi backend** running and accessible
2. **Next.js application** deployed or running locally
3. **Environment variables** configured:
   - `WEBHOOK_SECRET` - For webhook signature verification
   - `REVALIDATION_SECRET` - For endpoint authentication
   - `STRAPI_API_URL` - Your Strapi API URL

## Step 1: Generate Secrets

Generate secure secrets for your webhook:

```bash
# Generate webhook secret
openssl rand -hex 32

# Generate revalidation secret  
openssl rand -hex 32
```

Add these to your `.env.local` file:

```env
WEBHOOK_SECRET=your-generated-webhook-secret
REVALIDATION_SECRET=your-generated-revalidation-secret
```

## Step 2: Configure Strapi Webhooks

### Access Strapi Admin Panel

1. Log in to your Strapi admin panel
2. Navigate to `Settings > Webhooks`
3. Click "Create new webhook"

### Basic Webhook Configuration

Fill in the webhook form:

- **Name**: `Next.js Revalidation`
- **URL**: `https://your-nextjs-domain.com/api/revalidate`
  - For local development: `http://localhost:3000/api/revalidate`
  - For production: `https://your-domain.com/api/revalidate`

### Event Selection

Choose which events should trigger revalidation:

**Recommended events:**
- `entry.create` - When new content is created
- `entry.update` - When existing content is updated
- `entry.delete` - When content is deleted
- `entry.publish` - When content is published
- `entry.unpublish` - When content is unpublished

**Optional events:**
- `media.create` - When new media is uploaded
- `media.update` - When media is updated
- `media.delete` - When media is deleted

### Headers Configuration

Add the following headers for security:

```
X-Webhook-Secret: your-revalidation-secret
Content-Type: application/json
```

## Step 3: Advanced Security (Optional)

For enhanced security, you can also set up webhook signatures:

### In Strapi

1. In the webhook configuration, add a "Secret" field
2. Use your `WEBHOOK_SECRET` value
3. Strapi will sign the payload with this secret

### Webhook Payload

The webhook will send a payload like this:

```json
{
  "event": "entry.update",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "model": "home",
  "entry": {
    "id": 1,
    "title": "Updated Content",
    "slug": "updated-content",
    "createdAt": "2024-01-01T10:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

## Step 4: Testing the Webhook

### Manual Testing

Test the webhook endpoint manually:

```bash
# Test with curl
curl -X POST https://your-domain.com/api/revalidate \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Secret: your-revalidation-secret" \
  -d '{
    "event": "entry.update",
    "model": "home",
    "entry": { "id": 1 },
    "secret": "your-revalidation-secret"
  }'
```

### Expected Response

A successful webhook should return:

```json
{
  "revalidated": true,
  "now": 1704110400000,
  "event": "entry.update",
  "model": "home",
  "entityId": 1,
  "revalidatedPaths": ["/", "/example"],
  "revalidatedTags": ["home-content", "strapi-content"]
}
```

### Error Responses

Common error responses:

- **401 Unauthorized**: Check your `REVALIDATION_SECRET`
- **429 Rate Limited**: Too many requests from the same IP
- **500 Internal Server Error**: Check server logs for details

## Step 5: Content-Specific Configuration

### Header Content

For header menu changes, navigation updates, or logo changes:

```json
{
  "event": "entry.update",
  "model": "header",
  "entry": { "id": 1 },
  "secret": "your-revalidation-secret"
}
```

This will revalidate:
- All pages (since header appears on every page)
- Cache tags: `header-content`, `global-content`

### Footer Content

For footer menu changes, contact info updates, or compliance badges:

```json
{
  "event": "entry.update", 
  "model": "footer",
  "entry": { "id": 1 },
  "secret": "your-revalidation-secret"
}
```

This will revalidate:
- All pages (since footer appears on every page)
- Cache tags: `footer-content`, `global-content`

### Home Page Content

For content that affects the home page:

```json
{
  "event": "entry.update",
  "model": "home",
  "entry": { "id": 1 },
  "secret": "your-revalidation-secret"
}
```

This will revalidate:
- `/` (home page)
- `/example` (example page)
- Cache tags: `home-content`, `strapi-content`

### Page Content

For individual pages:

```json
{
  "event": "entry.update",
  "model": "page",
  "entry": { "id": 1 },
  "path": "/specific-page",
  "secret": "your-revalidation-secret"
}
```

### Global Content

For headers, footers, or other global content:

```json
{
  "event": "entry.update",
  "model": "global",
  "entry": { "id": 1 },
  "secret": "your-revalidation-secret"
}
```

## Step 6: Monitoring and Debugging

### Check Webhook Logs

In your Next.js application logs, you should see:

```
Revalidation request received: {
  event: 'entry.update',
  model: 'home',
  entityId: 1,
  timestamp: '2024-01-01T12:00:00.000Z',
  ip: '123.456.789.012'
}
Revalidated path: /
Revalidated path: /example
Revalidated tag: home-content
Revalidated tag: strapi-content
```

### Strapi Webhook Logs

Check your Strapi admin panel for webhook delivery status:

1. Go to `Settings > Webhooks`
2. Click on your webhook
3. View the "Requests" section to see delivery history

### Common Issues

1. **Webhook not firing**: Check event selection and Strapi content type
2. **Authentication failing**: Verify `REVALIDATION_SECRET` matches
3. **Rate limiting**: Implement proper retry logic in Strapi
4. **Network issues**: Ensure Next.js app is accessible from Strapi

## Step 7: Production Considerations

### HTTPS Required

In production, use HTTPS for your webhook endpoint:
- `https://your-domain.com/api/revalidate`

### Rate Limiting

The webhook endpoint includes rate limiting:
- **Default**: 10 requests per minute per IP
- **Configurable**: Modify `lib/webhook-utils.ts` to adjust limits

### Monitoring

Consider setting up monitoring for:
- Webhook delivery success rates
- Revalidation performance
- Error rates and patterns

### Security Best Practices

1. **Use strong secrets**: Generate random 32-byte secrets
2. **Verify signatures**: Enable webhook signature verification
3. **Monitor requests**: Log and monitor webhook requests
4. **Rate limiting**: Protect against abuse
5. **Network security**: Use HTTPS and proper firewall rules

## Troubleshooting

### Webhook Not Working

1. **Check URL**: Ensure webhook URL is correct and accessible
2. **Verify secrets**: Confirm `REVALIDATION_SECRET` is correct
3. **Check events**: Ensure proper events are selected
4. **Test manually**: Use curl to test the endpoint directly

### Revalidation Not Happening

1. **Check logs**: Look for revalidation messages in application logs
2. **Verify paths**: Ensure correct paths are being revalidated
3. **Cache headers**: Check if browsers are caching responses
4. **CDN issues**: If using a CDN, check cache purging

### Performance Issues

1. **Reduce events**: Only select necessary webhook events
2. **Optimize revalidation**: Limit the number of paths revalidated
3. **Batch requests**: Consider batching multiple content updates

## Custom Content Types

To add support for custom content types, modify `lib/webhook-utils.ts`:

```typescript
export function getRevalidationPaths(event: string, model: string): string[] {
  const paths: string[] = [];

  switch (model) {
    case 'home':
      paths.push('/', '/example');
      break;
    case 'product':
      paths.push('/products', '/');
      break;
    case 'blog-post':
      paths.push('/blog', '/');
      break;
    // Add your custom content types here
    default:
      paths.push('/', '/example');
      break;
  }

  return paths;
}
```

## Conclusion

With this setup, your Next.js application will automatically stay in sync with your Strapi content changes, providing a seamless content management experience with optimal performance through Next.js caching and revalidation.

For additional help, check the application logs and Strapi webhook delivery status when debugging issues. 