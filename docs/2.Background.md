# Background

Using e.g. Prisma and Zod, you often encountere some of the following problems:

-   Prisma does not support splitting files.
    -   There are solutions for this, but they are a bit clunky, and are after constructions.
-   Prisma uses it's own schema language.
    -   One could argue that it gives more freedom to define your entities in a programming language (i.e. TypeScript).
-   The solutions for generating zod types from Prisma leave some things to be desired.
    -   For instance, you might want two different schemas; one for creating entries (seed) and one of the fetched entries (read).
-   Prisma has a surprisingly hard way to create plugins or integrations.
-   Seeding in prisma is a pain.
-   Drizzle is a great tool and solves a few of these points, but I still need to repeat myself for each entity I create.

`Ormgen` allows you to define my entities in a file tree, and automatically generate everything you might need. It provides you with a few generators out of the box, but you can also create your own in a breeze.
