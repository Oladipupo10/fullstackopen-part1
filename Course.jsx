const Course = ({course}) => {
    return (
        <div>
            <h2>{course.name}</h2>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}
const  Content = ({parts}) => {
    return (
        <div>
            {parts.map(part =>
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
            )}
        </div>
    )
}
const Total = ({parts}) => {
    const total = parts.reduce(
        (sum, part) => sum + part.exercises,
        0
    )
    return (
        <p>
            <strong>total of {total} exercises</strong>
        </p>
    )
}
export default Course