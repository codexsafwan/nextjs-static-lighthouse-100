export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: 'green' | 'blue';
  date: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: 'optimizing-react-server-components',
    title: 'Optimizing React Server Components for Global Scale',
    description:
      'An in-depth analysis of streaming hydration patterns and how to reduce Time to Interactive (TTI) in large-scale distributed applications.',
    category: 'ARCHITECTURE',
    categoryColor: 'green',
    date: 'Oct 24, 2023',
    content: `React Server Components represent a paradigm shift in how we build web applications. By moving rendering logic to the server, we can dramatically reduce the JavaScript shipped to the client while maintaining rich interactivity where it matters.

The key insight is selective hydration — rather than hydrating the entire page, we can stream HTML and hydrate individual components as they become interactive. This approach reduces Time to Interactive by up to 60% in large-scale applications.

At scale, the architecture demands careful consideration of component boundaries. Server Components handle data fetching and static rendering, while Client Components manage interactive state at the leaf nodes. This separation creates a natural performance boundary that scales horizontally.

The streaming model also enables progressive loading patterns. Critical above-the-fold content renders immediately while secondary content streams in, maintaining a sub-second Largest Contentful Paint even on slower connections.`,
  },
  {
    slug: 'micro-interactions-developer-tools',
    title: 'Micro-interactions in Developer Tools',
    description:
      'How subtle animations and haptic feedback can significantly improve the productivity of CLI and IDE dashboard environments.',
    category: 'UI/UX',
    categoryColor: 'blue',
    date: 'Sep 12, 2023',
    content: `Developer tools are evolving beyond pure functionality into experiences that respect the cognitive load of their users. Micro-interactions — those small, purposeful animations — play a critical role in this evolution.

Consider the difference between a terminal command that silently succeeds and one that provides a subtle visual confirmation. The latter reduces anxiety and context-switching, allowing developers to maintain their flow state.

In IDE environments, haptic feedback on code completion, smooth transitions between file tabs, and animated error indicators all contribute to a more intuitive experience. These aren't decorative flourishes — they're functional signals that reduce the gap between action and understanding.

The challenge lies in calibration. Too many animations become noise. Too few leave users guessing. The sweet spot is animations that serve as confirmation of intent and guidance toward next steps, completing within 200ms to avoid disrupting the developer's rhythm.`,
  },
  {
    slug: 'next-gen-deployment-pipelines',
    title: 'Next-Gen Deployment Pipelines with Edge Functions',
    description:
      'Transitioning from monolith CI/CD to distributed edge deployment patterns for 99.99% availability and near-zero latency.',
    category: 'DEVOPS',
    categoryColor: 'green',
    date: 'Aug 05, 2023',
    content: `The traditional CI/CD pipeline — build, test, deploy to a central server — is showing its age. As applications demand global reach with sub-50ms response times, edge deployment has become not just an optimization but a necessity.

Edge functions execute at the network layer closest to the user, eliminating the round-trip to a central origin server. This architecture reduces p99 latency from hundreds of milliseconds to single digits, while simultaneously improving availability through geographic redundancy.

The deployment model shifts from "push to production" to "propagate to the edge." Each deployment fans out to hundreds of points of presence simultaneously, with built-in rollback mechanisms that can revert a region in under 30 seconds.

The key challenge is state management. Stateless computation at the edge is straightforward, but applications that require consistent data access need careful architecture — combining edge caching, regional databases, and conflict-free replicated data types to maintain consistency without sacrificing latency.`,
  },
  {
    slug: 'beyond-state-management-signal-patterns',
    title: 'Beyond State Management: Signal Patterns',
    description:
      'Exploring how fine-grained reactivity through Signals is changing the way we think about component re-rendering and data flow.',
    category: 'REACT',
    categoryColor: 'blue',
    date: 'Jul 20, 2023',
    content: `The React ecosystem has long debated state management — Redux, MobX, Zustand, Jotai — each offering different trade-offs between boilerplate and power. Signals represent a fundamentally different approach: fine-grained reactivity that eliminates unnecessary re-renders at the framework level.

Unlike traditional React state where a state change re-renders the entire component subtree, Signals track dependencies at the individual value level. When a Signal updates, only the specific DOM nodes that read that Signal are updated — no virtual DOM diffing required.

This granularity has profound implications for performance. Components that previously needed careful memoization with useMemo and React.memo become performant by default. The developer experience shifts from "optimize after the fact" to "fast by construction."

The pattern also simplifies data flow. Computed values derive automatically from their dependencies, creating a reactive graph that is both easier to reason about and more efficient to execute. As frameworks like Preact, Solid, and Angular adopt Signal primitives, this pattern is becoming a cross-framework standard for state management.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((article) => article.slug);
}
