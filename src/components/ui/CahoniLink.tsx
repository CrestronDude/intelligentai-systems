export default function CahoniLink({ children = "Cahoni AI" }: { children?: React.ReactNode }) {
  return (
    <a
      href="https://intelligentai.services/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#7FBBCF] hover:text-[#A8D4E2] transition-colors duration-200 hover:underline underline-offset-2"
    >
      {children}
    </a>
  );
}
