import React from 'react'
import type { FieldsType } from '../types/FieldTypes'
type ComponentData={
  field: FieldsType
}

const Select_Component: React.FC<ComponentData> = ({field}) => {
    // console.log(field)
  return (
    <div>
      <h2>Select componet no elelmtn {field.id}</h2>
    </div>
  )
}

export default Select_Component
