import React,{Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    
    render(){
        const { todos,onToggle,onRemove} = this.props;
        console.log(todos);
        const todoList = todos.map(
            // ({id,text,checked}) =>(
            //    <TodoItem
            //    id = {id}
            //    text={text}
            //    checked = {checked}
            //    onToggle = {onToggle}
            //    onRemove = {onRemove}
            //    key = {id} />
            // )
            ({id,text,checked,userId,title}) =>(
                <TodoItem
                id = {id}
                text={text}
                userId={userId}
                title={title}
                checked = {checked}
                onToggle = {onToggle}
                onRemove = {onRemove}
                key = {id} />
             )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;