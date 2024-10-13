export class ResponseStructure {
    success: boolean;
    data?: any;
    message?: any;
  
    constructor(success: boolean, data?: any, message?: any) {
      this.success = success
      this.data = data
      this.message = message
    }
  }
  