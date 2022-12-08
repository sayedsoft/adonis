import BookModelGenerated from "./generated/BookModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = BookModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await BookModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...BookModelGenerated,
  ...customModel
};
