/** Avalanche-style heading: regular weight, with the closing words in bold. */
export default function BoldTail({ text, n }: { text: string; n?: number }) {
  const words = text.split(" ");
  const tail = n ?? (words.length > 3 ? 2 : 1);
  const head = words.slice(0, words.length - tail).join(" ");
  const bold = words.slice(words.length - tail).join(" ");
  return (
    <>
      {head && `${head} `}
      <b>{bold}</b>
    </>
  );
}
