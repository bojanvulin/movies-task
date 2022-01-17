import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import CloseIcon from './icons/close'

const Label = styled.label`
    position: relative;
    display: flex;
`

const IconButton = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
`

const Input = styled.input`
    height: 30px;
    flex: 1;
    padding: 4px 40px 4px 4px;
`

type Props = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    onClear: () => void
}

export default function SearchInput({ onClear, ...inputProps }: Props) {
    return (
        <Label htmlFor={inputProps.id}>
            <Input type="text" {...(inputProps as any)} />
            <IconButton onClick={onClear}>
                <CloseIcon />
            </IconButton>
        </Label>
    )
}
