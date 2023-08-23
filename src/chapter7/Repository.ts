export interface IRepository<T> {
  save(data: T): T;
  update(data: T): T;
  delete(id: number): boolean;
  find(id: number): T;
  findAll(): T[];
}