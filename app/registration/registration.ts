export class Registration {

  public static get AGE_JUNIOR(): string { return 'junior'; }
  public static get AGE_ADULT(): string  { return 'adult'; }

  public static get PAGETYPE_INDIVIDUAL(): string  { return 'individual'; }
  public static get PAGETYPE_CREATE_TEAM(): string { return 'create-team'; }
  public static get PAGETYPE_JOIN_TEAM(): string   { return 'join-team'; }

  public static get CONTACTOPTIN_NO(): boolean  { return false; }
  public static get CONTACTOPTIN_YES(): boolean { return true; }

  public static get AFFILIATIONTYPE_NONE(): number         { return 1; }
  public static get AFFILIATIONTYPE_CORPORATE(): number    { return 2; }
  public static get AFFILIATIONTYPE_ORGANISATION(): number { return 3; }

  public static get PAGEISSEARCHABLE_NO(): boolean  { return false; }
  public static get PAGEISSEARCHABLE_YES(): boolean { return true; }

  public static get PAGETERMSCONDITIONS_NO(): boolean  { return false; }
  public static get PAGETERMSCONDITIONS_YES(): boolean { return true; }

  public age: string = null;
  public pageType: string = null;
  public userTitle: number = '';
  public userFirstName: string = null;
  public userLastName: string = null;
  public userEmailAddress: string = null;
  public userEmailAddressConfirm: string = null;
  public userPassword: string = null;
  public userAddressPostcode: string = null;
  public userTelephone: string = null;
  public contactOptinPost: boolean = Registration.CONTACTOPTIN_YES;
  public contactOptinEmail: boolean = Registration.CONTACTOPTIN_YES;
  public affiliationType: number = Registration.AFFILIATIONTYPE_NONE;
  public affiliationId: number = '';
  public affiliationText: string = null;
  public pageTitle: string = null;
  public pageIsSearchable: boolean = Registration.PAGEISSEARCHABLE_YES;
  public pageLink: string = null;
  public pageFundraisingTarget: number = null;
  public pageTermsConditions: boolean = Registration.PAGETERMSCONDITIONS_NO;

}