"use client"
import React, { memo, useCallback } from 'react'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const Btn = ({text,funType,className,disabled,convertFun}:BtnProps) => {
  const router = useRouter();
  const handleClick = {
    home:()=>{
      router.push('/')
    },
    currency:()=>{
      router.push('/currency')
    },
    covert:convertFun
  }
  return (
    <Button className={className}
    radius='sm'
      onClick={handleClick[funType]}
      disabled={disabled}
    >{text}</Button>
  )
}

export default memo(Btn);


type BtnProps = {
  text:string,
  funType:"home" | "currency" | "covert",
  className:string,
  disabled?:boolean,
  convertFun?:()=>void,
}