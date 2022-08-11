import React from "react"

export interface ProjectRowProps {
  link?:string,
  title:string,
  subject:string | React.ReactNode
  codeLink?:string
  linkSite?:string,
  stack:string,
  children?:React.ReactNode
  
}

