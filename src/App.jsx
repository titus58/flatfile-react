import {FlatfileProvider, initializeFlatfile, Sheet, Space, useFlatfile, Workbook} from "@flatfile/react";
import {useState} from "react";
import {sheet, workbook} from "./config.js";

const publishableKey = import.meta.env.VITE_FLATFILE_KEY;

function FlatFileWithDeprecatedHook() {
  const spaceProps = {
    name: "Embedded Space",
    publishableKey,
  };

  const [showSpace, setShowSpace] = useState(false);

  const { Space, OpenEmbed } = initializeFlatfile({
    ...spaceProps,
    workbook: workbook,
  });

  return (
    <div className="content">
      <h2>
        FlatFile with Deprecated Hook
      </h2>
      <p>This version is working but the initializeFlatfile is deprecated</p>
      {/*Button to trigger the modal */}
      <div>
        <button className="contrast" onClick={OpenEmbed}>
          {showSpace === true ? "Close" : "Open and create new"} Space
        </button>
         <Space />
      </div>
    </div>
  );
}

function FlatFileWithProvider() {
  const { openPortal } = useFlatfile();
  return <FlatfileProvider publishableKey={publishableKey}>
    <h2>Flatfile with Provider</h2>
    <p>The official code from the quickstart is not working.</p>
    <p>source: <a href={"https://flatfile.com/docs/apps/embedding/react/new_space_quickstart"}>https://flatfile.com/docs/apps/embedding/react/new_space_quickstart</a></p>
    <button onClick={openPortal}>Open Portal</button>
    <Sheet config={sheet} />
  </FlatfileProvider>
}

export default function App() {
  return <>
    <FlatFileWithDeprecatedHook />
    <hr/>
    <FlatFileWithProvider />
  </>;
}
