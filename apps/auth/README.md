# With-NestJS | auth

## Getting Started

From the monorepo root, install dependencies with `pnpm install`, then run:

```bash
pnpm turbo run dev --filter=auth...
```

Turborepo builds shared packages before starting the development servers and watches the shared auth package for changes.

By default, the auth runs at [localhost:3000](http://localhost:3000). You can use an auth client like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test it.

You can start editing the demo auths by modifying the [links service](./src/links/links.service.ts).

To build or test only the auth, run these commands from the monorepo root. Turborepo builds the required shared packages first:

```bash
pnpm turbo run build --filter=auth
pnpm turbo run test test:e2e --filter=auth
```

## Learn More

- [Official Documentation](https://docs.nestjs.com) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [Official NestJS Courses](https://courses.nestjs.com) - Learn everything you need to master NestJS and tackle modern backend applications at any scale.
- [GitHub Repo](https://github.com/nestjs/nest)
