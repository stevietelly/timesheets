import React from 'react';
import "./TemplateHolder.css";
import Template from '../../atoms/Template/Template';
import HyperlinkButton from '../../atoms/HyperLinkButton/HyperlinkButton';


const TemplateHolder = (props: any) => {
  var templates: Array<any> = [];
  props.data.forEach((datum: { shape: string, title: string; }, id: number) => {
    templates.push(<Template shape={datum.shape} title={datum.title} key={id}/>)
  });
  return (
    <div>
      <div className='TemplateHolder' style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {templates}
      </div>
      <div className="flex" style={{ height: "20px", margin: "7px", justifyContent: "flex-end" }}>

        <HyperlinkButton name="More templates" />

      </div>
    </div>

  )
}

export default TemplateHolder;
