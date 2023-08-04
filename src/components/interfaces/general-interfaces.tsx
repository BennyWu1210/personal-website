export interface Properties {
  initial: object,
  animate: object,
  transition: object
}

export interface pathVariants {
  displayed: { d?: string, opacity?: number },
  hidden: { d?: string, opacity?: number }
}

export interface pathProps {
  variants: pathVariants,
  d?: string,
  transition?: { duration: number }
}

export interface ModalProps {
  toggleModal?: () => void,
  showModal?: Boolean,
}


export interface NavLink {
  name: string,
}

export interface HobbyProps {
  name: string,
  icon: string,
  text: string
}

export interface ButtonProps {
  color: string,
  backgroundColor: string,
  url: string,
  height?: string | number,
  width?: string | number,
  children: React.ReactNode
}

export interface ProjectProps {
  imageURL: string,
  name: string
  text: string
}