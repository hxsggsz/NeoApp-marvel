import { StyledSkeleton } from "."

export const Skeleton = () => {
  return (
    <StyledSkeleton>
      <div className="skeleton-image"/>
      <div className="skeleton-image"/>
    </StyledSkeleton>
  )
}