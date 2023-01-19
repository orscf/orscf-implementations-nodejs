/* based on ORSCF IdentityManagement Contract v1.9.0.11852 */


export class ExtendedFieldDescriptor {
  
  public technicalName: string = '';
  
  public isRequired: boolean = false;
  
  public displayLabel: string = '';
  
  public inputDescription?: string;
  
  public regularExpression?: string;
  
}

export class IdentityDetails {
  
  /**
   * the firstname a person (named as in the HL7 standard)
   */
  public givenName: string = '';
  
  /**
   * the lastname a person (named as in the HL7 standard)
   */
  public familyName: string = '';
  
  /**
   * date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!)
   */
  public birthDate: string = '';
  
  /**
   * additional values for each 'extendedField' that is mandatory within (and specific to) the current IMS-System. To retrieve the declarations for such fields call 'GetExtendedFieldDescriptors'
   */
  public extendedFields?: Object;
  
}
