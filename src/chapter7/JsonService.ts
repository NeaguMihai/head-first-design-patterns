export class JsonService {
  serialize(data: {}): {} {
    console.log('save', data);
    return data;
  }
  update(data: {}): {} {
    console.log('update', data);
    return data;
  }
  delete(id: number): boolean {
    console.log('delete', id);
    return true;
  }
  deserialize(id: number): {} {
    console.log('find', id);
    return {};
  }
  deserializeAll(): {}[] {
    console.log('findAll');
    return [{}];
  }
}