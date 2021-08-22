function ChildComponent(props) {
    const { name, age } = props;
    //-> name = props.name , age = props.age
    return (
        <div>
            <p>이름은 {name}이며 {age}살입니다.</p>
        </div>
    )
}
export default ChildComponent;