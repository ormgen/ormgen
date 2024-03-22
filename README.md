# Ormgen

-   Automatically solves 100% of the ORM generation problems in 95% of all projects.
-   Automatically solves 95% of the ORM generation problems in 3% of all projects.
-   Gives 0% kcuf about the remaining 2%.

# Quick explanation

Ormgen allows you to define your database entities in a file tree and generate anything you want from them - be it a prisma schema, types or whatever you'd like. It also allows you to seed your database with the data you define in your entities.

# Quick start

1. Install the `ormgen` package.
2. Run `ormgen init path/to/source`.
3. Run `ts-node index.ts` (or `ts-node` equivalent) to run generators.

Or check the `Example` section for a more detailed guide.

# Documentation

1. [Background](docs/2.background.md)
1. [Concepts](docs/3-0.Concepts.md)
    1. [Entity](docs/3-1.Entity.md)
    2. [Enum](docs/3-2.Enum.md)
    3. [Mixins](docs/3-3.Mixins.md)
    4. [Generator](docs/3-4.Generator.md)
    5. [Instance](docs/3-5.Instance.md)
1. [Generators](docs/4.Generators.md)
1. [Cli](docs/5.Cli.md)
1. [Example](docs/10.Example.md)
1. [Todo & Roadmap](docs/10.Roadmap.md)
