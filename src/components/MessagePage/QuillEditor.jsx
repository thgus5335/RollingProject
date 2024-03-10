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

  const handleEditorChange = (content, editor) => {
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
