# Tech talk: Package versions

Intro about this tech talk


# The workspace

Intro about yarn workspaces
.....
Advantages of mono-repos instead of different repositories:
.....


## Setup

Creating a mono-repo with two packages in the workspace
Branch: `workspace-setup`

## Workspace dependencies

Add dependencies for packages in package.json

### External Node module Dependencies

Setting up independent packages with their own dependencies and running the apps
Branch: packages-setup

- Node modules are not present in package node_modules folder
- They are hoisted up into the root node_modules folder
- [Node module resolution strategy](https://www.typescriptlang.org/docs/handbook/module-resolution.html#node)

### Typescript setup

Branch: typescript-setup

- [Typescript module resolution]([https://www.typescriptlang.org/docs/handbook/module-resolution.html](https://www.typescriptlang.org/docs/handbook/module-resolution.html))
- [baseUrl]([https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url](https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url)) in tsconfig

### Internal Dependencies

Workspace packages added as dependency
Branch: `internal-dependency`

- Packages are hosted and sym-linked instead of downloaded from an npm registry


## Bundle sizes and Externals

### Bundle size

Shared packages are repeated in builds of dependency packages
Branch: `bundle-size`

### Externals

Marking packages as external will remove the package from the package build and it will depend on its existence in the consuming package.
Branch: `webpack-externals`

- Check bundle analyser output for both packages.
- Check package-c dist to find require statements for externals
- Change external configuration to validate require statement and failing build for consuming package.

## Final comments:

- tsconfig resolves relative paths based on `baseUrl` and paths config.
- Package names mentioned in import statements will always get resolved to the npm package and have nothing to do with tsconfig.
- Paths relative to package names are resolved to unbuild files.
- No paths and package name imports get resolved to package `main` file.
- `yarn workspaces info` gives all information about the workspace.