export class Restaurant {
    constructor(public restroName:string,public restroAddress:string,public cuisine:string,public openTime:string,public closeTime:string,public restroPicName:string,public picType:string,public picSize:any,public gstNo:string,public restroPhone:number){
        this.restroName=restroName;
        this.restroAddress=restroAddress;
        this.cuisine=cuisine;
        this.openTime=openTime;
        this.closeTime=closeTime;
        this.restroPicName=restroPicName;
        this.picType=picType;
        this.picSize=picSize;
        this.gstNo=gstNo;
        this.restroPhone=restroPhone;
    }

    getrestroPhone():number{
      return this.restroPhone;
   }

    getgstNo():string{
      return this.gstNo;
   }

    getRestroName():string{
       return this.restroName;
    }
    getRestroAddress():string{
        return this.restroAddress;
     }
     getCuisine():string{
        return this.cuisine;
     }
     getOpenTime():string{
        return this.openTime;
     }
     getCloseTime():string{
        return this.closeTime;
     }
     getRestroPicName():string{
        return this.restroPicName;
     }
     getPicType():string{
        return this.picType;
     }
     getPicSize():any{
        return this.picSize;
     }
}
