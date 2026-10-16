# Structure and execution boundaries

## Layout

| Area | Purpose |
| --- | --- |
| `src/sections-2-to-4` and `src/section-*` | Language-topic examples and course exercises. |
| `src/challenges` and `src/section-7` | Small challenge solutions. |
| `src/designPatterns` | Standalone pattern demonstrations, including observer, factory, proxy, callback, and dependency injection. |
| `tsconfig.json` | Strict TypeScript compiler configuration; emits CommonJS JavaScript to `dist`. |
| `assets/` | Course/reference imagery. |

## Execution model

There is no shared application entry point. The examples are separate scripts, and some may have side effects such as console output when executed. A learner should compile a selected file or introduce a temporary local runner rather than assume the entire tree represents one program.

## Boundaries

- The absence of package metadata means the toolchain version and invocation must be supplied by the developer.
- Pattern samples prioritize illustration over stable API design, error handling, or performance guarantees.
- Some examples intentionally use permissive types to illustrate runtime checks; they are not a universal style guide.
