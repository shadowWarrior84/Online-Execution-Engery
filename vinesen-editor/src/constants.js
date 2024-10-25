export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python3: "3.10.0",
  java: "17.0.2",
  cpp: "17.0.0"
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  python3: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  cpp: "#include <iostream>\r\n\r\nint main() {\r\n    std::cout << \"Hello World!\";\r\n    return 0;\r\n}"
};
