# Build stage
FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /app

# Install serve or required production dependencies
RUN npm install -g serve

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Non-root user for security
RUN adduser -D nodeuser
USER nodeuser

# Expose port
EXPOSE 5173

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5173/ || exit 1

# Start command
CMD ["serve", "-s", "dist", "-l", "5173"]