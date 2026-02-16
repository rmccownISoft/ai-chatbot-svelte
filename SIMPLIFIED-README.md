# Simplified AI Chatbot with Claude

This is a simplified version of the Vercel AI Chatbot template, using **Claude Sonnet 4.5** from Anthropic.

## 🎯 What Changed

### ✅ Added
- **Anthropic Claude Sonnet 4.5** as the AI model
- **Calculate tool** for basic math operations (using mathjs)
- Simple, clean interface without authentication

### ❌ Removed
- Authentication system (login/register)
- Database (PostgreSQL/Drizzle ORM)
- Chat history persistence
- User profiles
- Complex features (artifacts, documents, weather, etc.)

## 🚀 Getting Started

1. **Install dependencies** (if not already done):
   ```bash
   pnpm install
   ```

2. **Add your Anthropic API key** to `.env`:
   ```
   ANTHROPIC_API_KEY=your_actual_key_here
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. **Open your browser** to `http://localhost:5173`

## 💬 Using the Chatbot

### Basic Chat
Just type your message and press Enter or click Send. Claude will respond!

### Calculator Tool
Try asking Claude to do math:
- "What is 25 * 17?"
- "Calculate the square root of 144"
- "What's (15 + 25) / 4?"

Claude will automatically use the calculate tool when it detects you want to do math.

## 🔧 Key Files

- `src/lib/server/ai/models.ts` - Claude model configuration
- `src/routes/(chat)/api/chat/+server.ts` - Chat API endpoint with calculate tool
- `src/lib/components/chat.svelte` - Main chat component
- `.env` - Your API key

## 📚 Learn More

- [AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Anthropic Claude API](https://docs.anthropic.com/)
- [SvelteKit Documentation](https://kit.svelte.dev/)

## 🐛 Troubleshooting

If you get errors:
1. Make sure your `.env` file has the correct API key
2. Check that all dependencies are installed: `pnpm install`
3. Restart the dev server

## 📝 Notes

- Chats are **not saved** - they only exist in your browser session
- No user authentication - anyone can use it
- The calculate tool uses [mathjs](https://mathjs.org/) for evaluations
