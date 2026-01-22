module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/blogs/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "blogStore",
    ()=>blogStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// In-memory store for blogs (simulates a database)
const blogs = [
    {
        id: 1,
        title: 'Getting Started with React Query',
        description: 'Learn how to manage server state effectively with React Query in your applications.',
        content: `React Query has revolutionized how we handle server state in React applications. Unlike traditional state management solutions, React Query is specifically designed for managing asynchronous data.

## Why React Query?

Traditional state management libraries like Redux work well for client state, but they weren't designed with server state in mind. Server state is:

- Persisted remotely in a location you don't control
- Requires asynchronous APIs for fetching and updating
- Implies shared ownership and can be changed by other people without your knowledge
- Can potentially become "out of date" in your applications

React Query addresses all these concerns with elegant solutions like automatic background refetching, caching, and optimistic updates.

## Key Concepts

1. **Queries** - Used for fetching data
2. **Mutations** - Used for creating, updating, or deleting data
3. **Query Invalidation** - Marking data as stale to trigger refetches

The library handles loading states, error states, and caching automatically, dramatically reducing boilerplate code.`,
        date: '2026-01-15T10:00:00Z',
        category: [
            'TECHNOLOGY',
            'DEVELOPMENT'
        ],
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
        tags: [
            'React',
            'TanStack Query',
            'State Management',
            'Frontend'
        ],
        authorId: 'user-1',
        authorName: 'John Doe',
        likes: 12,
        likedBy: [
            'user-2',
            'user-3'
        ]
    },
    {
        id: 2,
        title: 'Mastering TypeScript Generics',
        description: 'A comprehensive guide to understanding and using TypeScript generics effectively.',
        content: `TypeScript generics are one of the most powerful features for building reusable, type-safe components and functions. They allow you to write flexible code while maintaining strict type checking.

## What are Generics?

Generics allow you to create components that work with a variety of types rather than a single one. This allows users to consume these components and use their own types.

## Basic Example

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello"); // result is string
const num = identity(42); // TypeScript infers number
\`\`\`

## Generic Constraints

You can constrain generics to ensure they have certain properties:

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
\`\`\`

Generics become especially powerful when combined with utility types like Partial, Pick, and Omit.`,
        date: '2026-01-12T14:30:00Z',
        category: [
            'TECHNOLOGY',
            'TUTORIAL'
        ],
        coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
        tags: [
            'TypeScript',
            'Generics',
            'Programming',
            'Tutorial'
        ],
        authorId: 'user-2',
        authorName: 'Jane Smith',
        likes: 8,
        likedBy: [
            'user-1'
        ]
    },
    {
        id: 3,
        title: 'Building Accessible React Components',
        description: 'Best practices for creating React components that are accessible to all users.',
        content: `Web accessibility (a11y) ensures that websites and applications are usable by everyone, including people with disabilities. Building accessible React components is not just a nice-to-have—it's essential.

## Why Accessibility Matters

- Over 1 billion people worldwide have some form of disability
- Accessible websites rank better in search engines
- Many accessibility improvements benefit all users
- Legal requirements in many countries

## Key Principles

### 1. Semantic HTML

Always use the correct HTML elements. A button should be a \`<button>\`, not a \`<div>\` with an onClick handler.

### 2. Keyboard Navigation

Ensure all interactive elements are accessible via keyboard. Use \`tabIndex\`, \`onKeyDown\` handlers, and focus management.

### 3. ARIA Attributes

When semantic HTML isn't enough, use ARIA attributes:
- \`aria-label\` for accessible names
- \`aria-expanded\` for expandable content
- \`aria-live\` for dynamic content

### 4. Color Contrast

Maintain a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.

Remember: the goal is to make your application usable for everyone, regardless of how they interact with it.`,
        date: '2026-01-10T09:00:00Z',
        category: [
            'DEVELOPMENT',
            'ACCESSIBILITY'
        ],
        coverImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop&q=60',
        tags: [
            'React',
            'Accessibility',
            'A11y',
            'Best Practices'
        ],
        authorId: 'user-1',
        authorName: 'John Doe',
        likes: 15,
        likedBy: [
            'user-2',
            'user-3',
            'user-4'
        ]
    }
];
const blogStore = {
    getAll: ()=>[
            ...blogs
        ],
    getById: (id)=>blogs.find((b)=>b.id === id),
    add: (blog)=>{
        blogs.unshift(blog);
        return blog;
    },
    delete: (id)=>{
        const index = blogs.findIndex((b)=>b.id === id);
        if (index !== -1) {
            blogs.splice(index, 1);
            return true;
        }
        return false;
    },
    update: (id, updates)=>{
        const index = blogs.findIndex((b)=>b.id === id);
        if (index !== -1) {
            blogs[index] = {
                ...blogs[index],
                ...updates
            };
            return blogs[index];
        }
        return null;
    },
    getNextId: ()=>Math.max(...blogs.map((b)=>b.id), 0) + 1
};
async function GET() {
    // Simulate network delay
    await new Promise((resolve)=>setTimeout(resolve, 300));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(blogStore.getAll());
}
async function POST(request) {
    try {
        const body = await request.json();
        // Validate required fields
        if (!body.title || !body.description || !body.content) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing required fields: title, description, content'
            }, {
                status: 400
            });
        }
        if (!body.authorId || !body.authorName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Author information is required'
            }, {
                status: 400
            });
        }
        const newBlog = {
            id: blogStore.getNextId(),
            title: body.title,
            description: body.description,
            content: body.content,
            date: body.date || new Date().toISOString(),
            category: body.category || [
                'GENERAL'
            ],
            coverImage: body.coverImage || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60',
            tags: body.tags || [],
            authorId: body.authorId,
            authorName: body.authorName,
            likes: 0,
            likedBy: []
        };
        blogStore.add(newBlog);
        // Simulate network delay
        await new Promise((resolve)=>setTimeout(resolve, 300));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newBlog, {
            status: 201
        });
    } catch (error) {
        console.error('[v0] Error creating blog:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid request body'
        }, {
            status: 400
        });
    }
}
}),
"[project]/src/app/api/blogs/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$blogs$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/blogs/route.ts [app-route] (ecmascript)");
;
;
async function GET(request, { params }) {
    // Simulate network delay
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const { id } = await params;
    const blogId = parseInt(id);
    const blog = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$blogs$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["blogStore"].getById(blogId);
    if (!blog) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Blog not found'
        }, {
            status: 404
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(blog);
}
async function DELETE(request, { params }) {
    // Simulate network delay
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const { id } = await params;
    const blogId = parseInt(id);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$blogs$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["blogStore"].getById(blogId)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Blog not found'
        }, {
            status: 404
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$blogs$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["blogStore"].delete(blogId);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5592655e._.js.map