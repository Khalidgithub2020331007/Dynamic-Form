import React from 'react'
import type { FieldsType } from '../types/FieldTypes'
type ComponentData={
  field: FieldsType
}

const Number_Component: React.FC<ComponentData> = ({field}) => {
    // console.log(field)
  return (
    <div>
      <h2>Number Component not implemented {field.id}</h2>
    </div>
  )
}

export default Number_Component
