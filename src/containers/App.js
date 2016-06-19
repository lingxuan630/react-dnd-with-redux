import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cloneDeep, forEach } from 'lodash';
import update from 'react/lib/update';
import * as DragActions from '../actions/drag';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Card from '../components/Card';

class App extends Component {
  
  componentWillMount() {
    const { actions } = this.props;
    actions.setData([
      {
        id: 1,
        text: 'Card  1'
      },
      {
        id: 2,
        text: 'Card  2'
      },
      {
        id: 3,
        text: 'Card  3'
      }
    ]);
  }

  moveCard(dragIndex, hoverIndex) {
    const { actions, dragState } = this.props;
    const cards = cloneDeep(dragState.entities);
    const dragCard = cards[dragIndex];
    cards.splice(dragIndex, 1);
    cards.splice(hoverIndex, 0, dragCard);
    actions.setData(cards);
  }

  handleChangeText(cardId){
    const { actions, dragState } = this.props;
    const cards = cloneDeep(dragState.entities);
    forEach(cards, function(item, i){
      if(item.id === cardId){
        item.text = 'text changed';
      }
    })
    actions.setData(cards);
  }

  render() {
    const { actions, dragState } = this.props;
    const vm = this;
    return (
      <div className='app-wrap'>
        <div className='drag-list'>
          {
            dragState.entities.map(function(item, i){
              return (
                <Card key={ item.id } 
                  text={ item.text } 
                  index={i}
                  id={item.id}
                  moveCard={ vm.moveCard.bind(vm) } 
                  onChangeText={ vm.handleChangeText.bind(vm) } />
              )
            })
          }
        </div>
      </div>
    )
  }
}


App.propTypes = {
  actions: PropTypes.object.isRequired
}

// 添加一些state到Props
function mapStateToProps(state) {
  return {
    dragState: state.drag,
  }
}

// 添加dispatch及Action到props
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    actions: {
      ...bindActionCreators(DragActions, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragDropContext(HTML5Backend)(App))