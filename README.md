# Ormgen

-   Automatically solves 100% of the ORM generation problem in 95% of all projects.
-   Automatically solves 95% of 3% of all projects.
-   Gives 0% kcuf about the remaining 2%.

# TODO

-   [ ] Seed
    -   [ ] TypeSafe generated package
        -   [ ] Use namespaces?
            -   [ ] Entities (interface with all entities)
            -   [ ] Entities.<EntityName>.Model (interface with the entity)
            -   [ ] Entities.<EntityName>.Seed (interface with the seed)
        -   [ ] Entities
            -   [ ] Model
            -   [ ] Seed
        -   [ ] Custom types (e.g. override the datetime type)
        -   [ ] Generate package on install?
    -   [ ] Sort by dependencies
    -   [ ] Prisma generator
-   [ ] Mixins
    -   [ ] Make available
-   [ ] Generate types for ormgen to use
    -   [ ] Make global mixins work
    -   [ ] Typesafe entity names
-   [ ] Add "OBS", do not change message
-   [ ] Add better readability (use more line breaks)
-   [ ] Documentation

## Future

-   [ ] Generators
    -   [ ] Zod
        -   [ ] config.includeDefaultValues
-   [ ] Refactor as a monorepo
    -   [ ] Or do a better linking. Maybe we want to keep two separate node_modules? Or one node_modules for each testing case?
-   [ ] Add types
    -   [ ] BigInt
    -   [ ] Float
    -   [ ] Decimal
    -   [ ] Bytes
-   [ ] Seed
    -   [ ] Take in data from previous seeds
