import { JsonService } from "./JsonService";
import { IRepository } from "./Repository";
import { JsonAdapter } from "./adapters/JsonAdapter";

const repo: IRepository<{}> = new JsonAdapter(new JsonService());