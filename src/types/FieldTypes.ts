export type ValidationsType={
    rule:string,
    value?:string,
    message:string,
}
export interface ConditionType{
    field:string,
    operator:string,
    value:string
}

export type OptionsType={
    label:string,
    value:string,
}

export type FieldsType={
    id:string,
    type:string ,
    name:string,
    label:string,
    defaultValue?:string|boolean,
    options?:OptionsType[],
    validations?:ValidationsType[],
    condition?:ConditionType[],
    placeholder?:string,
    dependsOn?:string,



}
export type FormDataType={
    formId:string,
    title:string,
    fields:FieldsType[]
}
