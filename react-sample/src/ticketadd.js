import { addTicket } from "./actions";
import React from "react";
import { connect } from "react-redux"; //reduxで使う
import { useHistory } from "react-router-dom";

const Ticket = (props) => {
  const add = (etitle, ename, edetail, eend, estart) => {
    console.log("クリックできました");
    const $title = document.getElementById("title");
    console.log($title.value);
    etitle = $title.value; //チケット名を取得

    const $detail = document.getElementById("detail");
    console.log($detail.value);
    edetail = $detail.value; //詳細情報を取得

    const $name = document.getElementById("name");
    console.log($name.value);
    ename = $name.value; //担当者を取得

    const $end = document.getElementById("end");
    console.log($end.value);
    eend = $end.value; //担当者を取得

    const $start = document.getElementById("start");
    console.log($start.value);
    estart = $start.value; //担当者を取得
    props.addTicket(etitle, edetail, ename, eend, estart);
    $title.value = "";
    $detail.value = "";
    $name.value = "";
    $end.value = "";
    $start.value = "";
  };
  const history = useHistory();

  return (
    <React.Fragment>
      {/* <Router> */}
      <div>
        <h2>チケット作成(Todo作成)</h2>
        <ul>
          <li>
            チケット名
            <input type="text" id="title" />
          </li>
          <li>
            詳細
            <input type="textarea" id="detail" />
          </li>
          <li>
            担当者
            <input type="text" id="name" />
          </li>
          <li>
            期日
            <input type="date" id="end" />
          </li>
          <li>
            開始日
            <input type="date" id="start" />
          </li>
          <button onClick={add}>追加</button>
          <button onClick={history.goBack}>戻る</button>
          {/* <Link to="/ticket">追加</Link> */}
        </ul>
        {/* <Switch> */}
        {/* <Route path='/ticket' component={Ticketview}/>
    </Switch> */}
      </div>
      {/* </Router> */}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
});
const mapDispatchToProps = (dispatch) => ({
  addTicket: (etitle, edetail, ename, eend, estart) =>
    dispatch(addTicket(etitle, edetail, ename, eend, estart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
