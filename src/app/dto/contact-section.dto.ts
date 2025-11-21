export interface ContactOptionDto {
  value: string;
  label: string;
}

export interface ContactTypeFieldDto {
  label: string;
  error: string;
  options: ContactOptionDto[];
}

export interface ContactTextFieldDto {
  label: string;
  placeholder: string;
  error: string;
}

export interface ContactSubmitFieldDto {
  label: string;
  sendingLabel: string;
}

export interface ContactFieldsDto {
  type: ContactTypeFieldDto;
  name: ContactTextFieldDto;
  email: ContactTextFieldDto;
  message: ContactTextFieldDto;
  submit: ContactSubmitFieldDto;
}

export interface ContactSectionDto {
  heading: string;
  subtitle: string;
  description: string;
  successMessage: string;
  fields: ContactFieldsDto;
}
