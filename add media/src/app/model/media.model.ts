export class Media{
    title : string;
    description : string;
    tag : string;
    filename : string;
    constructor(title:string, description:string, tag:string, filename:string){
      this.title = title;
      this.description = description;
      this.tag = tag;
      this.filename = filename;
    }
}