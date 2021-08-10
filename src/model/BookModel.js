class BookModel {
    constructor(name, quantity, bookRankID, shortDesc, detaiDesc, publisherId, yearOfPublic, languageId, code){
        this.name = name;
        this.quantity = quantity;
        this.bookRankID = bookRankID;
        this.shortDesc = shortDesc;
        this.detaiDesc = detaiDesc;
        this.publisherId = publisherId;
        this.yearOfPublic = yearOfPublic;
        this.languageId = languageId;
        this.code = code;
       
        
    }
}
export default BookModel;