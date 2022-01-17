import { ReactNode, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
    list-style-type: none;
    display: flex;
    padding: 0;
`

const StarButton = styled.button`
    cursor: pointer;
    display: flex;
    padding: 0;
    outline: 0;
    border: 0;
    background: transparent;
`

type Props = {
    count: number
    renderStar: (props: { active: boolean }) => ReactNode
    onClick: (rating: number) => void
}

export default function Rating({ count, renderStar, onClick }: Props) {
    const [hoverIndex, setHoverIndex] = useState(-1)

    return (
        <Wrapper>
            {[...Array(count)].map((_, i) => {
                return (
                    <li key={i}>
                        <StarButton
                            onClick={() => onClick(i + 1)}
                            onMouseEnter={() => setHoverIndex(i)}
                            onMouseLeave={() => setHoverIndex(-1)}
                        >
                            {renderStar({ active: i <= hoverIndex })}
                        </StarButton>
                    </li>
                )
            })}
        </Wrapper>
    )
}
