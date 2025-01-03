const dependencyService = {
  dependencies: {} as any,
  provide(name: string, dependency: any) {
    this.dependencies[name] = dependency;
    return this;
  },
  inject(dependencyName: string) {
    return this.dependencies[dependencyName] ?? null;
  },
};
export default dependencyService;
