import { JsonService } from "../JsonService";
import { IRepository } from "../Repository";

export class JsonAdapter implements IRepository<{}> {
  private jsonService: JsonService;

  constructor(jsonService: JsonService) {
    this.jsonService = jsonService;
  }

  save(data: {}): {} {
    return this.jsonService.serialize(data);
  }
  update(data: {}): {} {
    return this.jsonService.update(data);
  }
  delete(id: number): boolean {
    return this.jsonService.delete(id);
  }
  find(id: number): {} {
    return this.jsonService.deserialize(id);
  }
  findAll(): {}[] {
    return this.jsonService.deserializeAll();
  }

}