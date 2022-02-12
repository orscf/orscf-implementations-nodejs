/* based on ORSCF IdentityManagement Contract v1.8.0.11747 */


export class IdentityDetails {
  
  public firstName : string;
  
  public lastName : string;
  
  public email : string;
  
  public phone : string;
  
  public street : string;
  
  public houseNumber : string;
  
  public postCode : string;
  
  public city : string;
  
  public state : string;
  
  /**
   * two letter ISO code
   */
  public country : string;
  
  public dateOfBirth : Date;
  
  public dateOfDeath : Date;
  
}

export class ExtendedFieldDescriptor {
  
  public technicalName : string;
  
  public isRequired : boolean;
  
  public displayLabel : string;
  
  public inputDescription : string;
  
  public regularExpression : string;
  
}
