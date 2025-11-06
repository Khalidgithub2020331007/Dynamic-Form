import React from 'react'
import type { FieldsType } from '../types/FieldTypes'
type ComponentData={
  field: FieldsType
}

const Text_Area_Compornet: React.FC<ComponentData> = ({field}) => {
    // console.log(field)
  return (
    <div>
      <h2>Text Component not implemented {field.id}</h2>
    </div>
  )
}

export default Text_Area_Compornet
