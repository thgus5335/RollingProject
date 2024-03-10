import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomToolbar from './CustomToolbar';
import styles from './QuillEditor.module.css';

const Font = Quill.import('attributors/class/font');
Font.whitelist = ['notoSans', 'pretendard', 'nanumMyeongjo', 'nanumPenScript'];
Quill.register(Font, true);

const QuillEditor = ({ onMessageChange }) => {
  const [editorValue, setEditorValue] = useState('');

  // useEffect(() => {
  //   const style = document.createElement('style');
  //   style.innerHTML = `
  //     .ql-snow .ql-editor {
  //       font-family: 'notoSans', sans-serif; !important
  //     }
  //     .ql-snow .ql-font-pretendard {
  //       font-family: 'pretendard', sans-serif; !important
  //     }
  //     .ql-snow .ql-font-nanumMyeongjo {
  //       font-family: 'nanumMyeongjo', sans-serif; !important
  //     }

  //     .ql-snow .ql-font-nanumPenScript {
  //       font-family: 'nanumPenScript', sans-serif; !important
  //     }
  //     .ql-snow .ql-editor em {
  //       font-style: italic; !important;
  //     }
  //     .ql-snow .ql-editor strong {
  //       font-weight: bold; !important;
  //     }

  //   `;
  //   document.head.appendChild(style);

  //   return () => {
  //     document.head.removeChild(style);
  //   };
  // }, []);

  const modules = {
    toolbar: {
      container: '#toolbar',
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
    <div className={styles.test}>
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
