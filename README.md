# Ormgen

-   Automatically solves 100% of the ORM generation problems in 95% of all projects.
-   Automatically solves 95% of the ORM generation problems in 3% of all projects.
-   Gives 0% kcuf about the remaining 2%.

# Quick explanation

Ormgen allows you to:

-   Define your entities in a file based system.
-   Generate anything you want from them - be it a prisma schema, types, zod or whatever you'd like.
    -   Use built-in generators or create your own.
-   Seed your database in with a per-entity way.

|       Your entities        | Generated files (examples)  |
| :------------------------: | :-------------------------: |
| ![](docs/images/input.png) | ![](docs/images/output.png) |

# Quick start

1. Install the `ormgen` package.
2. Run `ormgen init path/to/source`.
3. Run `ts-node index.ts` (or `ts-node` equivalent) to run generators.

Or check the `Example` section for a more detailed guide.

# Documentation

1. [Background](docs/1.BACKGROUND/INDEX.md)
1. [Concepts](docs/2.CONCEPTS/1.INDEX.md) (WIP)
1. [Generators](docs/3.GENERATORS/INDEX.md) (WIP)
1. [Cli](docs/4.CLI/INDEX.md) (WIP)
1. [Example](docs/98.EXAMPLE/INDEX.md)
1. [Todo & Roadmap](docs/99.ROADMAP/INDEX.md)
