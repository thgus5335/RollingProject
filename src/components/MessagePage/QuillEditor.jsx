import { useEffect, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillEditor.module.css';
import CustomToolbar from './CustomToolbar';
// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열

const Font = Quill.import('attributors/class/font');
Font.whitelist = ['notoSans', 'pretendard', 'nanumMyeongjo', 'nanumPenScript'];
Quill.register(Font, true);

const QuillEditor = ({ onMessageChange }) => {
  const [editorValue, setEditorValue] = useState('');

  useEffect(() => {
    // 글꼴 적용을 위한 CSS 설정
    const style = document.createElement('style');
    // style.type = 'text/css';
    style.innerHTML = `
      .ql-snow .ql-editor {
        font-family: 'notoSans', sans-serif; !important
      }    
      .ql-snow .ql-font-pretendard {
        font-family: 'pretendard', sans-serif; !important
      }
      .ql-snow .ql-font-nanumMyeongjo {
        font-family: 'nanumMyeongjo', sans-serif; !important
      }

      .ql-snow .ql-font-nanumPenScript {
        font-family: 'nanumPenScript', sans-serif; !important
      }
      .ql-snow .ql-editor em {
        font-style: italic; !important;
      }
      .ql-snow .ql-editor strong {
        font-weight: bold; !important;
      }

    `;
    document.head.appendChild(style);
    console.log(style);
    return () => {
      // 컴포넌트 언마운트 시 스타일 요소 제거
      document.head.removeChild(style);
    };
  }, []);

  console.log(editorValue);
  const modules = {
    toolbar: {
      container: '#toolbar', // QuillToolbar 컴포넌트에서 정의한 id 사용
      handlers: {},
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  };

  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  const handleEditorChange = (content, delta, source, editor) => {
    onMessageChange(editor.getHTML());
    setEditorValue(content);
  };

  return (
    <div style={{ height: '26rem' }}>
      <CustomToolbar />
      <ReactQuill
        style={{ height: '26rem' }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorValue}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default QuillEditor;
