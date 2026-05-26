// All 157 tasks across 5 phases, extracted from sde-transition-plan.md
// Task IDs are stable — do not change them (they are used as localStorage keys).

const PLAN = {
  phases: [
    // ─────────────────────────────────────────────────────────────────────────
    // PHASE 1 — Python Foundation (Weeks 1–16, 32 tasks)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'phase-1',
      number: 1,
      title: 'Python Foundation',
      duration: 'Months 1–4',
      length: '16 weeks',
      hoursPerWeek: '~6 hrs/week',
      goal:
        'Write Python from scratch without googling syntax. Ship real tools, not tutorials. By the end you should be writing production-quality scripts with proper error handling, tests, and documentation.',
      checkpoint:
        'Can you write a Python script that calls an API, parses JSON, handles errors, and writes results to a file — without looking anything up? If yes, move to Phase 2. If not, extend by 2 weeks and revisit.',
      weeks: [
        {
          id: 'p1-w01',
          title: 'Week 1–2: Python syntax and mindset shift from PowerShell',
          hours: '6 hrs',
          tasks: [
            {
              id: 'p1-w01-t1',
              type: 'learn',
              text: 'Install Python 3.12+, VS Code, configure a virtual environment (venv). Understand indentation-over-braces — it will feel wrong for a week, then click.',
              links: [
                { label: 'Python download', url: 'https://www.python.org/downloads/' },
                { label: 'Python indentation explained', url: 'https://docs.python.org/3/reference/lexical_analysis.html#indentation' },
              ],
              steps: [
                { id: 'p1-w01-t1-s1', text: 'Download Python 3.12+ from python.org and run the installer — check "Add Python to PATH" on Windows.' },
                { id: 'p1-w01-t1-s2', text: 'Install VS Code from code.visualstudio.com.' },
                { id: 'p1-w01-t1-s3', text: 'Open VS Code → Extensions (Ctrl+Shift+X) → install the "Python" extension by Microsoft.' },
                { id: 'p1-w01-t1-s4', text: 'Open the integrated terminal (Ctrl+`) and run `python --version` — confirm it says 3.12+.' },
                { id: 'p1-w01-t1-s5', text: 'Create a project folder, cd into it, and run `python -m venv .venv`.' },
                { id: 'p1-w01-t1-s6', text: 'Activate the venv: `.venv\\Scripts\\activate` (Windows) or `source .venv/bin/activate` (Mac/Linux). Your prompt should change to show (.venv).' },
                { id: 'p1-w01-t1-s7', text: 'Run `where python` (Windows) or `which python` (Mac/Linux) and confirm the path points inside your .venv folder.' },
                {
                  id: 'p1-w01-t1-s8',
                  text: 'Indentation exercise — do this in the REPL to make the rule concrete:',
                  substeps: [
                    'Type `python` in your terminal to open the REPL.',
                    'Type `if True:` and press Enter — Python shows `...`, waiting for the block body.',
                    'Type 4 spaces, then `print("indented")`, then press Enter twice — it runs.',
                    'Repeat the block but skip the 4-space indent — Python immediately raises IndentationError.',
                    'Key takeaway: that error is not a style warning, it is hard syntax. In PowerShell, braces define blocks and indentation is optional style. In Python, indentation IS the block — there are no braces.',
                  ],
                },
              ],
            },
            {
              id: 'p1-w01-t2',
              type: 'learn',
              text: 'Variables, strings, lists, dicts, tuples, loops, conditionals. Work through Automate the Boring Stuff chapters 1–4 (free at automatetheboringstuff.com).',
              links: [
                { label: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com' },
              ],
              steps: [
                { id: 'p1-w01-t2-s1', text: 'Open automatetheboringstuff.com → Chapter 1: Python Basics. Read in full and type (don\'t copy) every code example into the Python REPL.' },
                { id: 'p1-w01-t2-s2', text: 'Chapter 2: Flow Control. Pay attention to elif chains and while loops — they map directly from PowerShell if/elseif and while.' },
                { id: 'p1-w01-t2-s3', text: 'Chapter 3: Functions. Work through all examples. Write at least one function from scratch before moving on.' },
                { id: 'p1-w01-t2-s4', text: 'Chapter 4: Lists. Understand slicing (list[1:3]), negative indexing, and the difference between a list (mutable) and a tuple (immutable).' },
                { id: 'p1-w01-t2-s5', text: 'Write a single Python script that uses all of: a string, a list, a dict, a for loop, and an if/elif/else block.' },
                { id: 'p1-w01-t2-s6', text: 'Solve at least one practice question from the end of each chapter before moving on.' },
              ],
            },
            {
              id: 'p1-w01-t3',
              type: 'build',
              text: 'Rewrite a simple PowerShell script you know well (log parser, file renamer) side-by-side in Python. The comparison makes syntax stick fast.',
              steps: [
                { id: 'p1-w01-t3-s1', text: 'Pick a PowerShell script you wrote yourself — a log parser, file renamer, or simple report generator. Nothing long; 20–50 lines is ideal.' },
                { id: 'p1-w01-t3-s2', text: 'Add a plain-English comment above each section explaining what it does (not how — what).' },
                { id: 'p1-w01-t3-s3', text: 'Create a new .py file and translate section by section. Don\'t convert the whole thing first — translate one block, run it, fix it, then move to the next.' },
                { id: 'p1-w01-t3-s4', text: 'Key mappings to focus on: `$variable` → bare name, `Write-Output` → `print()`, `ForEach-Object` → `for x in collection:`, `$null` → `None`, `-eq` → `==`.' },
                { id: 'p1-w01-t3-s5', text: 'Run both scripts on the same input and verify the output matches line-for-line.' },
                { id: 'p1-w01-t3-s6', text: 'Write down every place Python felt different or confusing. These are your current blind spots — revisit them in Week 3–4.' },
              ],
            },
            {
              id: 'p1-w01-t4',
              type: 'practice',
              text: 'Create a LeetCode account. Solve 3 Easy problems just to get comfortable with the platform — don\'t worry about elegance yet.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p1-w01-t4-s1', text: 'Go to leetcode.com → create a free account.' },
                { id: 'p1-w01-t4-s2', text: 'Solve "Two Sum" (problem #1). Spend 15–20 minutes attempting it before looking at any hints.' },
                { id: 'p1-w01-t4-s3', text: 'Solve "Valid Parentheses" (problem #20). Hint: think about what data structure lets you match opening/closing pairs.' },
                { id: 'p1-w01-t4-s4', text: 'Solve "Best Time to Buy and Sell Stock" (problem #121). The O(n) single-pass solution is the goal.' },
                { id: 'p1-w01-t4-s5', text: 'After each problem, click "Solutions" and read the top-voted Python approach. Understand why it\'s more elegant — don\'t just accept that it is.' },
                { id: 'p1-w01-t4-s6', text: 'Check your submission\'s runtime/memory percentile. The numbers don\'t matter yet — just get comfortable reading the results page.' },
              ],
            },
          ],
          notes:
            'Resource: automatetheboringstuff.com — free in full online. Read it, don\'t skim.',
        },
        {
          id: 'p1-w02',
          title: 'Week 3–4: Functions, modules, and error handling',
          hours: '6 hrs',
          tasks: [
            {
              id: 'p1-w02-t1',
              type: 'learn',
              text: 'Functions with default args, *args, **kwargs. Compare to PowerShell param() blocks — same concept, different syntax.',
              links: [
                { label: 'Python functions docs', url: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions' },
              ],
              steps: [
                { id: 'p1-w02-t1-s1', text: 'Write a function with required and default parameters: def greet(name, greeting="Hello") — call it with and without the optional argument and observe the difference.' },
                { id: 'p1-w02-t1-s2', text: 'Write a function using *args: def sum_all(*args) — iterate over args inside and return the total. Call it with 1, 3, and 5 arguments.' },
                { id: 'p1-w02-t1-s3', text: 'Write a function using **kwargs: def describe(**kwargs) — iterate over kwargs.items() and print each key/value pair.' },
                { id: 'p1-w02-t1-s4', text: 'Combine all three: def my_func(required, optional="default", *args, **kwargs) — call it 4 different ways and print what each variable contains in each case.' },
                { id: 'p1-w02-t1-s5', text: 'Map to PowerShell: param($Required, $Optional = "default") is the direct equivalent. Python *args replaces ValueFromRemainingArguments and **kwargs handles extra named parameters.' },
              ],
            },
            {
              id: 'p1-w02-t2',
              type: 'learn',
              text: 'Try/except/finally, raising custom exceptions. You already think in error paths from scripting — this maps directly.',
              links: [
                { label: 'Real Python exceptions guide', url: 'https://realpython.com/python-exceptions/' },
              ],
              steps: [
                { id: 'p1-w02-t2-s1', text: 'Write a function that reads a file — wrap the open() call in try/except FileNotFoundError and print a useful message instead of crashing.' },
                { id: 'p1-w02-t2-s2', text: 'Add except Exception as e after the specific handler — log the error and re-raise it with raise so the caller still knows something went wrong.' },
                { id: 'p1-w02-t2-s3', text: 'Add a finally: block that runs regardless of success or failure — good for cleanup like closing connections or printing status.' },
                { id: 'p1-w02-t2-s4', text: 'Define a custom exception: class ConfigValidationError(Exception): pass — raise it from a validation function with a descriptive message string.' },
                { id: 'p1-w02-t2-s5', text: 'Write a test for your custom exception: call the function with invalid input, catch ConfigValidationError, and assert the message contains the right text.' },
              ],
            },
            {
              id: 'p1-w02-t3',
              type: 'learn',
              text: 'Standard library imports: os, sys, pathlib, datetime, re. Learn to read the official Python docs — they are excellent: docs.python.org/3',
              links: [
                { label: 'Python docs', url: 'https://docs.python.org/3' },
                { label: 'Python stdlib index', url: 'https://docs.python.org/3/library/index.html' },
              ],
              steps: [
                { id: 'p1-w02-t3-s1', text: 'os: use os.environ.get("PATH"), list a directory with os.listdir(), join paths with os.path.join() — then note that pathlib replaces most of this in modern Python.' },
                { id: 'p1-w02-t3-s2', text: 'sys: read sys.argv to capture command-line arguments, call sys.exit(1) to exit with a non-zero code — useful in scripts that signal failure to a calling process.' },
                { id: 'p1-w02-t3-s3', text: 'pathlib: create Path(".").iterdir(), use .glob("*.py"), read .stat().st_size — pathlib is the modern replacement for os.path; use it exclusively in new code.' },
                { id: 'p1-w02-t3-s4', text: 'datetime: call datetime.now(), format with .strftime("%Y-%m-%d %H:%M"), parse a string back with datetime.strptime("2025-01-15", "%Y-%m-%d").' },
                { id: 'p1-w02-t3-s5', text: 're: compile a pattern with re.compile(r"\\b[A-Z]{2,}\\b"), use .findall() on sample text, use re.sub() to replace matches — regular expressions are the same concept as in PowerShell.' },
                { id: 'p1-w02-t3-s6', text: 'Pick one module you\'ll actually use at work and read its full page at docs.python.org/3/library/ end to end — not just the examples. The docs are excellent and short.' },
              ],
            },
            {
              id: 'p1-w02-t4',
              type: 'build',
              text: 'Rewrite another PowerShell tool using proper functions and full exception handling. Every edge case should be caught.',
              steps: [
                { id: 'p1-w02-t4-s1', text: 'Choose a more complex script than Week 1 — something with 3+ logical sections and at least one external dependency (file, API, registry).' },
                { id: 'p1-w02-t4-s2', text: 'Identify the distinct units of work and map each to a named Python function with a one-line docstring explaining what it does and what it returns.' },
                { id: 'p1-w02-t4-s3', text: 'Define all function signatures first — name, parameters with type hints, return type — before writing any bodies.' },
                { id: 'p1-w02-t4-s4', text: 'Implement each function with specific try/except blocks. Raise your custom exception types from p1-w02-t2, not bare Exception.' },
                { id: 'p1-w02-t4-s5', text: 'Write a main() function that calls the others in sequence and handles top-level failures with sys.exit(1) and a clear error message.' },
                { id: 'p1-w02-t4-s6', text: 'Deliberately test every error path: missing file, empty input, wrong data type, network timeout — verify each one is caught and produces a useful message.' },
              ],
            },
          ],
          notes: 'Resource: Real Python "Python Exceptions: An Introduction" — realpython.com/python-exceptions/',
        },
        {
          id: 'p1-w03',
          title: 'Week 5–6: File I/O, JSON, and pathlib',
          hours: '6 hrs',
          tasks: [
            {
              id: 'p1-w03-t1',
              type: 'learn',
              text: 'Read/write text and binary files. JSON module: loads, dumps, indent, handle encoding edge cases.',
              links: [
                { label: 'Python file I/O docs', url: 'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files' },
                { label: 'Python json module', url: 'https://docs.python.org/3/library/json.html' },
              ],
              steps: [
                { id: 'p1-w03-t1-s1', text: 'Read a text file line by line using with open(path, "r", encoding="utf-8") as f — always use the context manager; never use bare open() without with.' },
                { id: 'p1-w03-t1-s2', text: 'Write a function that appends a line to a file (mode "a") and another that overwrites it (mode "w") — understand the difference between the two modes.' },
                { id: 'p1-w03-t1-s3', text: 'Use json.loads() to parse a JSON string into a Python dict, and json.dumps(data, indent=2) to write it back as pretty-printed JSON.' },
                { id: 'p1-w03-t1-s4', text: 'Create a text file containing "café" and try writing it without specifying encoding — observe the UnicodeEncodeError on Windows, then fix it by adding encoding="utf-8".' },
                { id: 'p1-w03-t1-s5', text: 'Practice the full loop: read a JSON file with json.load(f), modify a value, write it back with json.dump(data, f, indent=2) — this pattern appears constantly in scripting work.' },
              ],
            },
            {
              id: 'p1-w03-t2',
              type: 'learn',
              text: 'pathlib.Path for all filesystem work (not os.path — pathlib is the modern approach). Directory traversal, glob patterns, file metadata.',
              links: [
                { label: 'pathlib docs', url: 'https://docs.python.org/3/library/pathlib.html' },
              ],
              steps: [
                { id: 'p1-w03-t2-s1', text: 'Replace every os.path call you\'ve written so far with its pathlib equivalent: os.path.exists() → path.exists(), os.path.join() → path / "subdir" / "file.txt".' },
                { id: 'p1-w03-t2-s2', text: 'Iterate over all JSON files in a directory: Path("./data").glob("*.json") — iterate the result and print each filename.' },
                { id: 'p1-w03-t2-s3', text: 'Recurse into subdirectories: Path(".").rglob("*.log") — collect all matching paths into a list.' },
                { id: 'p1-w03-t2-s4', text: 'Read file metadata without string manipulation: path.stat().st_size for bytes, path.stat().st_mtime for last-modified timestamp.' },
                { id: 'p1-w03-t2-s5', text: 'Decompose a file path: path.parent (directory), path.stem (filename without extension), path.suffix (the extension) — no string splitting needed.' },
                { id: 'p1-w03-t2-s6', text: 'Create and clean up: path.mkdir(parents=True, exist_ok=True), path.unlink() to delete a file, path.rmdir() to remove an empty directory.' },
              ],
            },
            {
              id: 'p1-w03-t3',
              type: 'build',
              text: 'Script that reads a directory of JSON config files (mock M365DSC-style configs), validates required fields, flags drift, and outputs a summary report to a new JSON file.',
              steps: [
                { id: 'p1-w03-t3-s1', text: 'Create a data/ folder with 6–8 sample JSON config files — model them after real M365DSC or Azure resource configs. Include required fields like "name", "environment", and "owner". Intentionally omit or misspell them in 2–3 files.' },
                { id: 'p1-w03-t3-s2', text: 'Define a schema dict at the top of your script: REQUIRED_FIELDS = {"name": str, "environment": str, "owner": str, "region": str}.' },
                { id: 'p1-w03-t3-s3', text: 'Write validate_config(path, schema) → list[str]: load the JSON, check for each required field, return a list of drift findings (e.g. "missing field: owner", "wrong type: region").' },
                { id: 'p1-w03-t3-s4', text: 'Write run_audit(data_dir, schema) → dict: iterate over all .json files using Path(data_dir).glob("*.json"), call validate_config on each, collect results keyed by filename.' },
                { id: 'p1-w03-t3-s5', text: 'Add a timestamp and summary count to the output dict, then write it to report.json with json.dump(results, f, indent=2, default=str).' },
                { id: 'p1-w03-t3-s6', text: 'Test it: introduce a deliberate drift in one config (delete a field, set environment to an int), run the script, and verify the finding appears in report.json with the right filename and description.' },
              ],
            },
            {
              id: 'p1-w03-t4',
              type: 'practice',
              text: 'LeetCode: 10 Easy problems total by end of week 6. Focus on string and array problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p1-w03-t4-s1', text: 'String problems to target: Valid Palindrome (#125), Reverse String (#344), First Unique Character in a String (#387), Valid Anagram (#242).' },
                { id: 'p1-w03-t4-s2', text: 'Array problems to target: Two Sum (#1), Best Time to Buy and Sell Stock (#121), Contains Duplicate (#217), Move Zeroes (#283).' },
                { id: 'p1-w03-t4-s3', text: 'For every problem: attempt it yourself before reading anything, then after submitting read the top-voted solution and understand why it\'s faster or cleaner than yours.' },
              ],
            },
          ],
          notes:
            'A config drift detector is something you would actually use at work. Build things with real domain value.',
        },
        {
          id: 'p1-w04',
          title: 'Week 7–8: HTTP, REST APIs, and the requests library',
          hours: '6 hrs',
          tasks: [
            {
              id: 'p1-w04-t1',
              type: 'learn',
              text: 'HTTP methods (GET, POST, PATCH, DELETE), status codes, headers, auth patterns (Bearer token, API key, Basic). You know this from Invoke-RestMethod — just learn the Python syntax.',
              links: [
                { label: 'httpbin.org (test API)', url: 'https://httpbin.org' },
                { label: 'HTTP status codes reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status' },
              ],
              steps: [
                { id: 'p1-w04-t1-s1', text: 'GET https://httpbin.org/get using requests.get() — inspect response.status_code, response.headers, and response.json(). This is Invoke-RestMethod translated to Python.' },
                { id: 'p1-w04-t1-s2', text: 'POST to https://httpbin.org/post with json={"key": "value"} — verify your body echoes back in the response JSON under the "json" key.' },
                { id: 'p1-w04-t1-s3', text: 'Add an Authorization: Bearer test-token header using the headers= parameter — check that httpbin echoes it back under "headers" in the response.' },
                { id: 'p1-w04-t1-s4', text: 'Test error paths: call a bad hostname and catch requests.exceptions.ConnectionError; call https://httpbin.org/status/404 and verify response.status_code == 404.' },
                { id: 'p1-w04-t1-s5', text: 'Write a wrapper function that accepts a requests.Response and calls response.raise_for_status() — this automatically converts 4xx/5xx responses into exceptions so callers don\'t need to check status codes manually.' },
              ],
            },
            {
              id: 'p1-w04-t2',
              type: 'learn',
              text: 'requests library: get/post, params, headers, json body, response handling, timeouts, retries with requests.Session.',
              links: [
                { label: 'requests docs', url: 'https://docs.python-requests.org' },
                { label: 'Real Python guide', url: 'https://realpython.com/python-requests/' },
              ],
              steps: [
                { id: 'p1-w04-t2-s1', text: 'Create a requests.Session(), set default headers on it with session.headers.update({"User-Agent": "my-script/1.0"}), and reuse it for all calls in your script — more efficient than a new connection per call.' },
                { id: 'p1-w04-t2-s2', text: 'Add timeout=(5, 30) to every request — the first number is the connect timeout, the second is the read timeout. A request without a timeout will hang indefinitely on a flaky network.' },
                { id: 'p1-w04-t2-s3', text: 'Call a paginated API: fetch page 1, extract the next-page token or URL from the response, loop until there is none, and collect all results into a single list.' },
                { id: 'p1-w04-t2-s4', text: 'Implement a retry loop: if a call returns 5xx or raises requests.exceptions.Timeout, wait 2 seconds and retry up to 3 times — use time.sleep(2) between attempts.' },
                { id: 'p1-w04-t2-s5', text: 'Parse nested JSON safely: use response.json().get("users", []) instead of response.json()["users"] — direct key access raises KeyError if the field is absent; .get() returns a default.' },
              ],
            },
            {
              id: 'p1-w04-t3',
              type: 'build',
              text: 'Call the Microsoft Graph API in Python. Authenticate with MSAL, get a list of users, filter by department, output to JSON. Use your existing Azure app registration.',
              links: [
                { label: 'MSAL for Python', url: 'https://github.com/AzureAD/microsoft-authentication-library-for-python' },
                { label: 'MS Graph API docs', url: 'https://learn.microsoft.com/en-us/graph/overview' },
              ],
              steps: [
                { id: 'p1-w04-t3-s1', text: 'Open Azure Portal → App Registrations → your existing app → note the Application (client) ID and Directory (tenant) ID. Under Certificates & Secrets, create a new client secret and copy the value immediately.' },
                { id: 'p1-w04-t3-s2', text: 'Install msal: pip install msal — store your client_id, tenant_id, and client_secret in environment variables, never in source code.' },
                { id: 'p1-w04-t3-s3', text: 'Acquire a token: app = msal.ConfidentialClientApplication(client_id, authority=f"https://login.microsoftonline.com/{tenant_id}", client_credential=client_secret) → result = app.acquire_token_for_client(scopes=["https://graph.microsoft.com/.default"]).' },
                { id: 'p1-w04-t3-s4', text: 'Call GET https://graph.microsoft.com/v1.0/users with headers={"Authorization": f"Bearer {result[\'access_token\']}"} — print the raw JSON to confirm authentication worked.' },
                { id: 'p1-w04-t3-s5', text: 'Parse response["value"], filter users where user.get("department") matches a real department in your tenant, and collect displayName + mail for each match.' },
                { id: 'p1-w04-t3-s6', text: 'Write the filtered list to users_YYYY-MM-DD.json using json.dump with indent=2, and a filename built with datetime.now().strftime("%Y-%m-%d").' },
              ],
            },
            {
              id: 'p1-w04-t4',
              type: 'amazon',
              text: 'Coffee chat: identify one SDE on your team or an adjacent Amazon team. Reach out on Slack — "I\'m building toward an SDE transition and would love 20 minutes to understand what your day-to-day looks like."',
              steps: [
                { id: 'p1-w04-t4-s1', text: 'Find your target: check your team\'s org chart, the Slack directory, or ask your manager who to talk to. Look for someone approachable who works on tooling, automation, or infrastructure-adjacent software.' },
                { id: 'p1-w04-t4-s2', text: 'Send a concise Slack message: "Hi [name] — I\'m on [your team] and I\'m actively building toward an SDE transition. Would you be open to a 20-min chat? I\'d love to hear what your day-to-day looks like."' },
                { id: 'p1-w04-t4-s3', text: 'Prepare 3 specific questions before the call: (1) what does a typical sprint look like for you, (2) what skill gap surprised you most in the transition, (3) what technology does your team use most day-to-day.' },
                { id: 'p1-w04-t4-s4', text: 'After the call: write a 3-bullet summary of what you learned and save it. These notes will directly inform your Phase 3 project choices and Phase 4 team targeting.' },
              ],
            },
          ],
          notes:
            'Resources: Real Python "Python\'s requests library (guide)" — realpython.com/python-requests/ | requests library docs — docs.python-requests.org | MSAL Python — github.com/AzureAD/microsoft-authentication-library-for-python',
        },
        {
          id: 'p1-w05',
          title: 'Week 9–10: AWS SDK / Boto3 deep dive',
          hours: '6 hrs',
          tasks: [
            {
              id: 'p1-w05-t1',
              type: 'learn',
              text: 'Boto3 client vs resource interfaces, sessions, region config, pagination (PageIterator), waiters. Error handling with botocore.exceptions.ClientError.',
              links: [
                { label: 'Boto3 docs', url: 'https://boto3.amazonaws.com/v1/documentation/api/latest/index.html' },
                { label: 'botocore exceptions', url: 'https://botocore.amazonaws.com/v1/documentation/api/latest/index.html' },
              ],
              steps: [
                { id: 'p1-w05-t1-s1', text: 'Create a boto3 client: client = boto3.client("s3", region_name="us-east-1") — call client.list_buckets() and print each bucket name. Then create a resource: s3 = boto3.resource("s3") — note that resource gives you object-oriented access while client gives you raw API calls.' },
                { id: 'p1-w05-t1-s2', text: 'Practice pagination: create a paginator for list_objects_v2, then iterate: for page in paginator.paginate(Bucket="my-bucket"): for obj in page["Contents"]: ... — never assume all results fit in one call.' },
                { id: 'p1-w05-t1-s3', text: 'Use a waiter: after creating an S3 bucket, call client.get_waiter("bucket_exists").wait(Bucket=name) before operating on it — waiters handle the polling loop so you don\'t have to.' },
                { id: 'p1-w05-t1-s4', text: 'Handle ClientError: wrap a Boto3 call in try/except botocore.exceptions.ClientError as e: — print e.response["Error"]["Code"] and e.response["Error"]["Message"] to see what went wrong.' },
                { id: 'p1-w05-t1-s5', text: 'Create a reusable get_session(profile=None, region="us-east-1") function that returns a configured boto3.Session — every script in your project should use this instead of creating clients directly.' },
              ],
            },
            {
              id: 'p1-w05-t2',
              type: 'learn',
              text: 'IAM best practices for SDK use: roles over access keys, least privilege policies, credential chain resolution.',
              links: [
                { label: 'AWS credential chain docs', url: 'https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html' },
                { label: 'IAM least privilege guide', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html' },
              ],
              steps: [
                { id: 'p1-w05-t2-s1', text: 'Read the Boto3 credentials chain docs — understand the resolution order: environment variables → ~/.aws/credentials → IAM instance profile → container role. Never hardcode an access key in source code.' },
                { id: 'p1-w05-t2-s2', text: 'Review the IAM role attached to your development environment — open the policy in the console and audit each Action. Could any permission be scoped to a specific resource ARN instead of "*"?' },
                { id: 'p1-w05-t2-s3', text: 'Create a new IAM role with only the permissions your Boto3 scripts actually need — write the policy yourself in JSON, don\'t use a managed policy unless it\'s a perfect fit.' },
                { id: 'p1-w05-t2-s4', text: 'Configure a named AWS profile in ~/.aws/config for this role and use it: boto3.Session(profile_name="audit-role") — keeps credentials separate from code.' },
                { id: 'p1-w05-t2-s5', text: 'Enable AWS CloudTrail in your sandbox account and run a Boto3 script — find your API calls in the CloudTrail event history. This is how you\'ll debug "AccessDenied" errors in production.' },
              ],
            },
            {
              id: 'p1-w05-t3',
              type: 'build',
              text: 'AWS resource auditor: scans S3 buckets (versioning, public access, encryption status) and EC2 instances (stopped instances, missing tags), outputs a structured JSON report.',
              steps: [
                { id: 'p1-w05-t3-s1', text: 'Design the output schema first in a comment block: what fields does each S3 finding need? Each EC2 finding? Decide this before writing any API calls.' },
                { id: 'p1-w05-t3-s2', text: 'Implement S3 checks: for each bucket call get_bucket_versioning, get_public_access_block, and get_bucket_encryption — each can return a "not configured" state, handle it explicitly.' },
                { id: 'p1-w05-t3-s3', text: 'Implement EC2 checks: use describe_instances with Filters=[{"Name": "instance-state-name", "Values": ["stopped"]}] for stopped instances; check tags for required keys like Owner, Environment, and Project.' },
                { id: 'p1-w05-t3-s4', text: 'Combine results into a top-level dict with a "scanned_at" timestamp, "account_id" from boto3.client("sts").get_caller_identity(), and "findings" lists for S3 and EC2.' },
                { id: 'p1-w05-t3-s5', text: 'Test against a real sandbox account: create an S3 bucket without versioning enabled, run the auditor, and verify it appears as a finding. Fix the bucket and re-run to confirm it clears.' },
              ],
            },
            {
              id: 'p1-w05-t4',
              type: 'practice',
              text: 'LeetCode: 20 Easy problems total. Start timing yourself — aim under 20 minutes per Easy.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p1-w05-t4-s1', text: 'Set a visible timer before each problem — your phone or a browser timer. 20 minutes is the target. If you don\'t have a solution at 20 minutes, stop and read the optimal approach.' },
                { id: 'p1-w05-t4-s2', text: 'Keep a note of which problem types take you longest — that\'s your current weakest area. Common early bottlenecks: index manipulation, nested loops vs hash map substitution.' },
                { id: 'p1-w05-t4-s3', text: 'Redo every problem you got wrong on first attempt — not to memorize the solution but to verify you understand the underlying pattern well enough to apply it again.' },
              ],
            },
          ],
          notes:
            'You already know AWS deeply. Boto3 is the fastest win in Phase 1 — build something that would actually impress your current team. | Boto3 docs — boto3.amazonaws.com/v1/documentation/api/latest/index.html | botocore exceptions — botocore.amazonaws.com/v1/documentation/api/latest/index.html',
        },
        {
          id: 'p1-w06',
          title: 'Week 11–12: OOP — classes, inheritance, encapsulation',
          hours: '6 hrs',
          tasks: [
            {
              id: 'p1-w06-t1',
              type: 'learn',
              text: 'Classes, __init__, instance vs class variables, methods, @property decorator. self is not optional — understand why.',
              links: [
                { label: 'Python classes docs', url: 'https://docs.python.org/3/tutorial/classes.html' },
              ],
              steps: [
                { id: 'p1-w06-t1-s1', text: 'Define a class AWSResource with __init__(self, resource_id, region) — create 3 instances and access their attributes. Understand that self is the instance itself; Python passes it automatically.' },
                { id: 'p1-w06-t1-s2', text: 'Add a class variable (e.g. resource_type = "generic") shared across all instances, and an instance variable (e.g. self.tags = {}) unique per instance. Modify one and verify the other is unaffected.' },
                { id: 'p1-w06-t1-s3', text: 'Add a method to_dict(self) that returns {"id": self.resource_id, "region": self.region} — call it on each instance and verify the output.' },
                { id: 'p1-w06-t1-s4', text: 'Add __str__(self) returning a human-readable string and __repr__(self) returning a string that could recreate the object — print an instance and call repr() on it to see the difference.' },
                { id: 'p1-w06-t1-s5', text: 'Convert a plain attribute to a @property with a getter: @property def display_name(self): return f"{self.resource_type}/{self.resource_id}" — access it without parentheses like an attribute.' },
              ],
            },
            {
              id: 'p1-w06-t2',
              type: 'learn',
              text: 'Inheritance, super(), method overriding, polymorphism. Dunder methods: __str__, __repr__, __len__, __eq__, __enter__/__exit__ (context managers).',
              steps: [
                { id: 'p1-w06-t2-s1', text: 'Create subclasses EC2Instance(AWSResource) and S3Bucket(AWSResource) — override to_dict() in each to add type-specific fields. Call each version and verify the right one runs.' },
                { id: 'p1-w06-t2-s2', text: 'Use super().__init__() in each subclass constructor to call the parent before adding subclass-specific attributes — remove it and observe the AttributeError to understand why it\'s needed.' },
                { id: 'p1-w06-t2-s3', text: 'Implement __len__ on a class that holds a list of resources — then len(my_auditor) returns the count. Implement __eq__ so two instances with the same resource_id compare as equal.' },
                { id: 'p1-w06-t2-s4', text: 'Implement __enter__ and __exit__ to make a class usable as a context manager: with AWSSession() as session: ... — __enter__ sets up the connection, __exit__ cleans it up even if an exception occurs.' },
              ],
            },
            {
              id: 'p1-w06-t3',
              type: 'build',
              text: 'Refactor your AWS auditor or M365 Graph script into a class-based design: an AWSAuditor class with methods for each check, a run_all() method, and a to_report() method.',
              steps: [
                { id: 'p1-w06-t3-s1', text: 'Define class AWSAuditor with __init__(self, session: boto3.Session) — accept the session as a parameter (dependency injection) rather than creating it internally. This makes testing easier.' },
                { id: 'p1-w06-t3-s2', text: 'Move each audit check into its own method: check_s3_versioning(self) → list[dict], check_s3_encryption(self) → list[dict], check_ec2_stopped(self) → list[dict].' },
                { id: 'p1-w06-t3-s3', text: 'Add run_all(self) → None that calls each check method and stores results in self._findings = {} — keyed by check name.' },
                { id: 'p1-w06-t3-s4', text: 'Add to_report(self) → dict that returns {"generated_at": ..., "findings": self._findings} — raise an error if called before run_all().' },
                { id: 'p1-w06-t3-s5', text: 'Write a thin main(): session = boto3.Session(); auditor = AWSAuditor(session); auditor.run_all(); print(json.dumps(auditor.to_report(), indent=2, default=str)) — the class does the work, main just wires it together.' },
              ],
            },
            {
              id: 'p1-w06-t4',
              type: 'amazon',
              text: 'Talk to your manager. Frame it as: "I have been investing in Python and SDE skills — I want to understand what an internal SDE transition would look like." Plant the seed early.',
              steps: [
                { id: 'p1-w06-t4-s1', text: 'Request a dedicated 1:1 for this topic — don\'t bring it up at the end of an existing meeting. Something like: "I\'d like to discuss a career development topic — can we set aside 30 minutes this week?"' },
                { id: 'p1-w06-t4-s2', text: 'Frame it with progress, not aspiration: "I\'ve spent 3 months building Python skills, I\'ve shipped two tools, and I\'m targeting an SDE transition within 18 months. I wanted to discuss what that path looks like internally."' },
                { id: 'p1-w06-t4-s3', text: 'Ask two specific questions: "What would make you confident I\'m ready?" and "Are there any SDE-adjacent projects I could contribute to now while staying in my current role?"' },
                { id: 'p1-w06-t4-s4', text: 'Send a brief follow-up email summarizing what was discussed — this creates a written record and signals that you\'re serious enough to document the conversation.' },
              ],
            },
          ],
          notes:
            'OOP feels abstract until you model something you know. Your infrastructure knowledge is the domain model — use it.',
        },
        {
          id: 'p1-w07',
          title: 'Week 13–14: Git properly + SAA-C03 study begins',
          hours: '6 hrs',
          tasks: [
            {
              id: 'p1-w07-t1',
              type: 'learn',
              text: 'Git beyond the basics: branching strategy (trunk-based vs gitflow), rebasing vs merging, interactive rebase, resolving conflicts, pull request workflow.',
              links: [
                { label: 'Pro Git (free book)', url: 'https://git-scm.com/book' },
                { label: 'Trunk-based development', url: 'https://trunkbaseddevelopment.com' },
              ],
              steps: [
                { id: 'p1-w07-t1-s1', text: 'Create a local repo, make 3 commits on main, then create a feature branch and make 2 commits on it — run git log --oneline --graph --all to visualize the divergence.' },
                { id: 'p1-w07-t1-s2', text: 'Merge the feature branch into main using git merge --no-ff feature — the --no-ff flag creates an explicit merge commit rather than fast-forwarding, which preserves branch history.' },
                { id: 'p1-w07-t1-s3', text: 'Create a second feature branch, make 2 commits, then rebase it onto main: git checkout feature2 && git rebase main — resolve any conflicts when prompted, then git rebase --continue.' },
                { id: 'p1-w07-t1-s4', text: 'Practice interactive rebase: make 3 messy commits, then git rebase -i HEAD~3 — squash two of them into one, and reword the commit message of another.' },
                { id: 'p1-w07-t1-s5', text: 'Simulate a PR workflow on GitHub: push a branch, open a pull request, merge it via the GitHub UI, delete the remote branch, then git fetch --prune and git pull locally to sync.' },
              ],
            },
            {
              id: 'p1-w07-t2',
              type: 'learn',
              text: 'Project structure: pyenv for Python version management, venv for project isolation, pyproject.toml. How a real Python project is organized.',
              links: [
                { label: 'pyenv', url: 'https://github.com/pyenv/pyenv' },
                { label: 'pyproject.toml guide', url: 'https://packaging.python.org/en/latest/guides/writing-pyproject-toml/' },
              ],
              steps: [
                { id: 'p1-w07-t2-s1', text: 'Install pyenv (follow the GitHub README for your OS), then install Python 3.11 and 3.12 side by side: pyenv install 3.12.0 — switch between them with pyenv global or pyenv local.' },
                { id: 'p1-w07-t2-s2', text: 'Create a new project with the src/ layout: mkdir src/mypackage && touch src/mypackage/__init__.py — this is the standard structure that avoids import confusion between your source and installed package.' },
                { id: 'p1-w07-t2-s3', text: 'Write a pyproject.toml with [project] name, version, requires-python = ">=3.12", and [project.dependencies] — then install it in editable mode: pip install -e .' },
                { id: 'p1-w07-t2-s4', text: 'Add [tool.pytest.ini_options] testpaths = ["tests"] to pyproject.toml so pytest knows where to find your tests without any extra configuration.' },
                { id: 'p1-w07-t2-s5', text: 'Verify the setup: from any directory inside the venv, run python -c "import mypackage" — if it works without a path hack, the project structure is correct.' },
              ],
            },
            {
              id: 'p1-w07-t3',
              type: 'learn',
              text: 'Begin SAA-C03 study (Stephane Maarek Udemy course). Weeks 13–14 target: VPC, EC2, IAM, S3 — you know these operationally, learn the design and exam framing.',
              links: [
                { label: 'Maarek SAA-C03 course', url: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/' },
                { label: 'AWS SAA-C03 exam guide', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
              ],
              steps: [
                { id: 'p1-w07-t3-s1', text: 'Purchase the Maarek SAA-C03 course on Udemy — wait for a sale, it regularly drops to $15. Do not pay full price.' },
                { id: 'p1-w07-t3-s2', text: 'VPC section: focus on subnet design (public vs private), NAT Gateway vs NAT instance, Security Groups vs NACLs, VPC peering vs Transit Gateway — you\'ve operated these, now learn the exam\'s design-choice framing.' },
                { id: 'p1-w07-t3-s3', text: 'EC2 section: instance types and when to use each family (C for compute, R for memory, I for storage), purchasing options (On-Demand, Reserved, Spot), and placement groups.' },
                { id: 'p1-w07-t3-s4', text: 'IAM section: policies vs roles vs resource-based policies, the evaluation logic (explicit deny wins), SCPs in Organizations — connect each to how you\'ve configured IAM operationally.' },
                { id: 'p1-w07-t3-s5', text: 'After each section: answer all Maarek practice questions before checking answers. Reading explanations without testing first is passive and far less effective.' },
                { id: 'p1-w07-t3-s6', text: 'Schedule the SAA-C03 exam now for around week 20 — having a date on the calendar changes how you study. Exam fee: $150 USD.' },
              ],
            },
            {
              id: 'p1-w07-t4',
              type: 'build',
              text: 'Push all Phase 1 Python projects to GitHub. Write a README for each: what it does, why it exists, how to run it, what you learned.',
              links: [
                { label: 'GitHub', url: 'https://github.com' },
                { label: 'README best practices', url: 'https://www.makeareadme.com' },
              ],
              steps: [
                { id: 'p1-w07-t4-s1', text: 'Create a GitHub account if you don\'t have one — use a professional username you\'d be comfortable sharing with a hiring manager.' },
                { id: 'p1-w07-t4-s2', text: 'Create a new repo for each project with a clear name: aws-resource-auditor, m365-graph-client, config-drift-detector.' },
                { id: 'p1-w07-t4-s3', text: 'Write a README.md for each using this structure: one-sentence description → why you built it → quick start (exact copy-paste commands) → what you learned.' },
                { id: 'p1-w07-t4-s4', text: 'Add a .gitignore to every repo that excludes: .venv/, __pycache__/, *.pyc, .env, *.egg-info/ — use gitignore.io to generate one for Python.' },
                { id: 'p1-w07-t4-s5', text: 'Before pushing: run git log and git show on any commits that touched .env or config files — verify no credentials, tokens, or access keys exist anywhere in the history.' },
              ],
            },
          ],
          notes: 'Schedule the SAA-C03 exam for around week 20. Exam fee $150 USD. | Pro Git book (free) — git-scm.com/book | pyenv — github.com/pyenv/pyenv | pyproject.toml guide — packaging.python.org/en/latest/guides/writing-pyproject-toml/',
        },
        {
          id: 'p1-w08',
          title: 'Week 15–16: Phase 1 capstone and wrap-up',
          hours: '6 hrs',
          tasks: [
            {
              id: 'p1-w08-t1',
              type: 'build',
              text: 'Phase 1 capstone: a Python CLI tool that solves a real problem in your current job. Must call at least one API, read/write files, use a class, handle all errors gracefully.',
              links: [
                { label: 'click (CLI library)', url: 'https://click.palletsprojects.com' },
                { label: 'argparse docs', url: 'https://docs.python.org/3/library/argparse.html' },
              ],
              steps: [
                { id: 'p1-w08-t1-s1', text: 'Brainstorm 3 real tools that would save you time at work right now — write one sentence about each. Pick the one with the most obvious daily value.' },
                { id: 'p1-w08-t1-s2', text: 'Write a one-page design doc before any code: inputs, outputs, which API it calls, what can fail and how you\'ll handle it, what the class structure looks like.' },
                { id: 'p1-w08-t1-s3', text: 'Add a proper CLI interface using argparse or click: --help should produce useful output, required arguments should fail clearly if missing.' },
                { id: 'p1-w08-t1-s4', text: 'Run it against real data from your work environment (with appropriate permissions) — the edge cases that appear in production are different from the ones you imagined.' },
                { id: 'p1-w08-t1-s5', text: 'Write a README that explains the tool as if a colleague will use it without asking you anything — if you need to explain it verbally, the README isn\'t done.' },
              ],
            },
            {
              id: 'p1-w08-t2',
              type: 'learn',
              text: 'Write unit tests for your capstone using pytest (docs.pytest.org). Aim for coverage on core logic functions. First time writing tests feels slow — that is normal.',
              links: [
                { label: 'pytest docs', url: 'https://docs.pytest.org' },
                { label: 'Real Python testing guide', url: 'https://realpython.com/python-testing/' },
              ],
              steps: [
                { id: 'p1-w08-t2-s1', text: 'Install pytest and pytest-cov: pip install pytest pytest-cov — run pytest in your project root to confirm it discovers tests in the tests/ directory.' },
                { id: 'p1-w08-t2-s2', text: 'Write your first test function: def test_validate_config_missing_field(): ... — any function starting with test_ is automatically discovered by pytest. Run it with pytest -v.' },
                { id: 'p1-w08-t2-s3', text: 'Use pytest.raises() to test your error handling: with pytest.raises(ConfigValidationError, match="missing field"): validate_config(bad_data) — assert both the exception type and message.' },
                { id: 'p1-w08-t2-s4', text: 'Run pytest --cov=src --cov-report=term-missing — the "missing" column shows exactly which lines aren\'t covered. Aim for 70%+ on your core logic functions.' },
                { id: 'p1-w08-t2-s5', text: 'Use monkeypatch or unittest.mock to replace external calls (AWS API, file system) in tests — tests that call real APIs are slow, brittle, and require credentials to run in CI.' },
              ],
            },
            {
              id: 'p1-w08-t3',
              type: 'practice',
              text: 'LeetCode: 30 Easy problems total by end of Phase 1. Review every problem you got wrong — understand the pattern, not just the answer.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p1-w08-t3-s1', text: 'Open your submission history and find every problem where you needed more than one attempt or submitted a wrong answer — work through those first.' },
                { id: 'p1-w08-t3-s2', text: 'For each problem you got wrong: read the editorial or top solution, then close it and write the solution from scratch from memory. If you can\'t do that, read it again and repeat.' },
                { id: 'p1-w08-t3-s3', text: 'By end of Phase 1 you should be able to recognise these patterns on sight: frequency map (dict/Counter), two pointers, sliding window, prefix sum, and stack for bracket matching.' },
              ],
            },
            {
              id: 'p1-w08-t4',
              type: 'learn',
              text: 'Continue SAA-C03: RDS, DynamoDB, SQS, SNS, Lambda, API Gateway, CloudFront, Route 53. Connect each service to your existing operational knowledge.',
              links: [
                { label: 'AWS SAA-C03 practice exams', url: 'https://www.udemy.com/course/practice-exams-aws-certified-solutions-architect-associate/' },
              ],
              steps: [
                { id: 'p1-w08-t4-s1', text: 'RDS: Multi-AZ vs Read Replicas — this is a classic exam trap. Multi-AZ is for high availability (failover), Read Replicas are for read scaling. They are not interchangeable.' },
                { id: 'p1-w08-t4-s2', text: 'DynamoDB: partition key design (choose a key with high cardinality), GSIs vs LSIs (GSI can use any attribute, LSI must use the same partition key), and when to use on-demand vs provisioned capacity.' },
                { id: 'p1-w08-t4-s3', text: 'SQS vs SNS: SQS is a queue — one consumer processes each message. SNS is pub/sub — one message fans out to many subscribers. The SNS → SQS fan-out pattern delivers one event to multiple queues simultaneously.' },
                { id: 'p1-w08-t4-s4', text: 'Lambda: cold start causes, concurrency limits (1000 per region by default), execution role permissions, and the three most common integrations you\'ll see on the exam: API Gateway, SQS trigger, and S3 event.' },
                { id: 'p1-w08-t4-s5', text: 'For each service: connect it to something you\'ve actually operated. The exam tests design decisions — your operational experience lets you reason about tradeoffs rather than just memorising answers.' },
              ],
            },
          ],
          notes:
            'Do not rush to Phase 2 if you cannot pass the phase checkpoint. Extending by 2 weeks here saves significant struggle in Phase 2.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PHASE 2 — CS Core + DSA (Weeks 17–40, 49 tasks)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'phase-2',
      number: 2,
      title: 'CS Core + DSA',
      duration: 'Months 5–10',
      length: '24 weeks',
      hoursPerWeek: '~8 hrs/week',
      goal:
        'Build the DSA foundation that SDE interviews are built on. This is the phase most career-changers skip and then fail interviews on. No shortcuts. DSA is pure pattern recognition built through repetition.',
      checkpoint:
        'Can you solve a Medium LeetCode problem in arrays, hashing, or trees in under 30 minutes and clearly explain your time and space complexity? If yes, move to Phase 3. If not, extend by 2 weeks and drill your weakest topic area.',
      weeks: [
        {
          id: 'p2-w01',
          title: 'Week 17–18: Big O notation + arrays and hashing',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w01-t1',
              type: 'learn',
              text: 'Time and space complexity: O(1), O(n), O(log n), O(n log n), O(n²). How to analyze code you write. Work through Neetcode.io Arrays and Hashing section.',
              links: [
                { label: 'Neetcode.io', url: 'https://neetcode.io' },
                { label: 'Python time complexity', url: 'https://wiki.python.org/moin/TimeComplexity' },
              ],
              steps: [
                { id: 'p2-w01-t1-s1', text: 'For every function you write from now on, state its time and space complexity aloud before moving on. O(n²) nested loops, O(n log n) sorting, O(n) single pass, O(log n) binary search, O(1) hash lookup.' },
                { id: 'p2-w01-t1-s2', text: 'Read the Python time complexity reference — know that list.append() is O(1) amortized, list.insert(0, x) is O(n), dict[key] is O(1) average, and "x in list" is O(n) vs "x in set" is O(1).' },
                { id: 'p2-w01-t1-s3', text: 'Open Neetcode.io → Roadmap → Arrays and Hashing section. Follow it in order — watch the video explanation before attempting the problem, not after.' },
                { id: 'p2-w01-t1-s4', text: 'Practice analyzing your own code: write a brute force solution, calculate its complexity, identify the bottleneck, then ask "what data structure would make that step O(1) instead of O(n)?"' },
              ],
            },
            {
              id: 'p2-w01-t2',
              type: 'learn',
              text: 'Python list internals and dict internals. How they behave at the O() level. Why dict lookup is O(1).',
              steps: [
                { id: 'p2-w01-t2-s1', text: 'Time list.append() vs list.insert(0, x) on a list of 100,000 elements using the timeit module — feel the difference between O(1) amortized and O(n).' },
                { id: 'p2-w01-t2-s2', text: 'Time "x in my_list" vs "x in my_set" for a target near the end of 100,000 elements — verify the set lookup is near-constant while the list scan grows linearly.' },
                { id: 'p2-w01-t2-s3', text: 'Understand why dict lookup is O(1): Python hashes the key, maps it to a bucket, and accesses that bucket directly — no scanning. Hash collisions degrade this toward O(n) in the worst case, but that\'s rare in practice.' },
                { id: 'p2-w01-t2-s4', text: 'Two Sum exercise: implement the brute force O(n²) solution, verify it passes, then rewrite it using a dict to achieve O(n) — this is the single most important O(n) optimisation pattern in DSA interviews.' },
              ],
            },
            {
              id: 'p2-w01-t3',
              type: 'practice',
              text: 'LeetCode: Contains Duplicate, Valid Anagram, Two Sum, Group Anagrams. Understand WHY the hash map solution works, not just that it does.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w01-t3-s1', text: 'Contains Duplicate (#217): solve with a set — as you iterate, check if the element is already in the set before adding it. Why does this work? A set lookup is O(1), so the whole thing is O(n).' },
                { id: 'p2-w01-t3-s2', text: 'Valid Anagram (#242): count character frequencies using collections.Counter on both strings — if the counts match, they\'re anagrams. Alternatively sort both strings and compare: O(n log n) vs O(n).' },
                { id: 'p2-w01-t3-s3', text: 'Two Sum (#1): brute force first (O(n²) nested loops), then rewrite with a dict: as you iterate, check if (target - num) is already in the dict. The dict stores each number\'s index as you go.' },
                { id: 'p2-w01-t3-s4', text: 'Group Anagrams (#49): use tuple(sorted(word)) as the dict key — words that are anagrams of each other produce the same sorted tuple and land in the same group.' },
              ],
            },
            {
              id: 'p2-w01-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 35 problems by end of week 18.',
              steps: [
                { id: 'p2-w01-t4-s1', text: 'Check your current submission count — if you\'re behind 35 by end of this week, solve the delta before Phase 2, Week 2 starts.' },
                { id: 'p2-w01-t4-s2', text: 'Review every problem you got wrong at least once — look for a pattern in your mistakes. Is it the algorithm? The edge case handling? The Python syntax?' },
              ],
            },
          ],
          notes:
            'Resources: neetcode.io — start from the beginning of the roadmap and follow the order exactly. Do not skip ahead. | LeetCode — leetcode.com | Python time complexity reference — wiki.python.org/moin/TimeComplexity',
        },
        {
          id: 'p2-w02',
          title: 'Week 19–20: Two pointers and sliding window',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w02-t1',
              type: 'learn',
              text: 'Two pointer pattern: when and why to use it. Convergent pointers vs same-direction pointers. Sliding window: fixed size vs variable size.',
              links: [
                { label: 'Neetcode two pointers', url: 'https://neetcode.io/roadmap' },
              ],
              steps: [
                { id: 'p2-w02-t1-s1', text: 'Convergent pointers: left=0, right=len-1, move toward each other. Use when the array is sorted and you need pairs. Draw the pointer positions on paper for [1,2,3,4,5] before writing any code.' },
                { id: 'p2-w02-t1-s2', text: 'Same-direction pointers: slow and fast both start at 0, fast advances faster. Use for cycle detection, finding midpoints, or removing duplicates in-place from a sorted array.' },
                { id: 'p2-w02-t1-s3', text: 'Fixed-size sliding window: maintain a window of exactly k elements using a sum or set — slide it right one step at a time, adding the new element and removing the leftmost.' },
                { id: 'p2-w02-t1-s4', text: 'Variable-size sliding window: expand right until a condition is violated, then shrink from the left until it\'s satisfied again. The key insight is that shrinking is valid because the window state is fully tracked.' },
                { id: 'p2-w02-t1-s5', text: 'Write the template for each pattern from memory before starting the LeetCode problems — templates let you focus on the problem-specific logic rather than re-deriving the structure.' },
              ],
            },
            {
              id: 'p2-w02-t2',
              type: 'practice',
              text: 'LeetCode: Valid Palindrome, 3Sum, Container With Most Water, Longest Substring Without Repeating Characters, Minimum Size Subarray Sum.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w02-t2-s1', text: 'Valid Palindrome (#125): convergent pointers, skip non-alphanumeric characters with str.isalnum() — don\'t create a cleaned copy of the string first (that\'s O(n) extra space).' },
                { id: 'p2-w02-t2-s2', text: '3Sum (#15): sort first, then fix one element and use convergent two pointers on the rest — sorting enables the two-pointer optimisation and makes deduplication straightforward.' },
                { id: 'p2-w02-t2-s3', text: 'Container With Most Water (#11): convergent pointers — always move the shorter line inward. Understand why: moving the taller line can only decrease the width without increasing the height bound.' },
                { id: 'p2-w02-t2-s4', text: 'Longest Substring Without Repeating Characters (#3): variable sliding window with a set tracking current characters — when a duplicate is found, shrink from the left until the duplicate is removed.' },
                { id: 'p2-w02-t2-s5', text: 'Minimum Size Subarray Sum (#209): variable window — expand right until sum >= target, record the window size, then shrink left as far as possible while still meeting the condition.' },
              ],
            },
            {
              id: 'p2-w02-t3',
              type: 'learn',
              text: 'For each problem, write out the brute force solution first, then optimize. Verbalizing the optimization step is what interviews test.',
              steps: [
                { id: 'p2-w02-t3-s1', text: 'For every problem this week: write a working brute force solution before attempting to optimise — even if you already see the fast solution, code the slow one first to confirm your understanding of the problem.' },
                { id: 'p2-w02-t3-s2', text: 'Name the bottleneck explicitly: "the inner loop is O(n) for every outer iteration, making this O(n²) total" — then ask what data structure or invariant would eliminate that repeated work.' },
                { id: 'p2-w02-t3-s3', text: 'Practice saying the transition out loud: "The brute force is O(n²) because... I can improve it to O(n) by... because..." — this is exactly what you\'ll need to say in an interview.' },
              ],
            },
            {
              id: 'p2-w02-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 45 problems.',
              steps: [
                { id: 'p2-w02-t4-s1', text: 'Can you write the convergent two-pointer template from memory? Can you write the variable sliding window template? If not, write each one out 3 times until it\'s automatic.' },
                { id: 'p2-w02-t4-s2', text: 'Check your count — if you\'re at or above 45, move on. If you\'re short, prioritise the unsolved problems from this week\'s list before starting p2-w03.' },
              ],
            },
          ],
          notes:
            'Two pointers and sliding window alone cover roughly 15% of SDE interview questions. These two weeks have outsized return on investment.',
        },
        {
          id: 'p2-w03',
          title: 'Week 21–22: Stacks and queues',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w03-t1',
              type: 'learn',
              text: 'Stack (LIFO) and queue (FIFO) — implementation with Python lists and collections.deque. When to reach for each. Monotonic stack concept.',
              links: [
                { label: 'collections.deque docs', url: 'https://docs.python.org/3/library/collections.html#collections.deque' },
              ],
              steps: [
                { id: 'p2-w03-t1-s1', text: 'Implement a stack using a Python list: push = list.append(), pop = list.pop(), peek = list[-1] — verify both operations are O(1).' },
                { id: 'p2-w03-t1-s2', text: 'Implement a queue using collections.deque: enqueue = deque.append(), dequeue = deque.popleft() — note that list.pop(0) is O(n) and must never be used as a queue; deque.popleft() is O(1).' },
                { id: 'p2-w03-t1-s3', text: 'Monotonic stack: a stack where elements remain in sorted order (ascending or descending). When a new element violates the order, pop until it doesn\'t, then push the new element.' },
                { id: 'p2-w03-t1-s4', text: 'Trace the monotonic stack manually on [2, 1, 3, 4, 1] for the "next greater element" problem — draw the stack state after each element is processed before writing any code.' },
              ],
            },
            {
              id: 'p2-w03-t2',
              type: 'practice',
              text: 'LeetCode: Valid Parentheses, Min Stack, Evaluate Reverse Polish Notation, Daily Temperatures, Largest Rectangle in Histogram.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w03-t2-s1', text: 'Valid Parentheses (#20): push opening brackets onto a stack; when you see a closing bracket, pop the top and check they match — return False immediately if they don\'t or the stack is empty.' },
                { id: 'p2-w03-t2-s2', text: 'Min Stack (#155): maintain a parallel "min stack" alongside the main stack — every push also pushes the current minimum onto the min stack. getMin() peeks the min stack top in O(1).' },
                { id: 'p2-w03-t2-s3', text: 'Evaluate Reverse Polish Notation (#150): push operands; when you see an operator, pop two operands, apply the operator, push the result — use int() on the final stack top.' },
                { id: 'p2-w03-t2-s4', text: 'Daily Temperatures (#739): monotonic decreasing stack of indices — for each temperature, pop indices whose temperature is lower and record the distance. This is the canonical monotonic stack problem.' },
                { id: 'p2-w03-t2-s5', text: 'Largest Rectangle in Histogram (#84): harder but important for Amazon — monotonic stack tracks left boundaries of potential rectangles. Study this one carefully even if it takes two sessions.' },
              ],
            },
            {
              id: 'p2-w03-t3',
              type: 'build',
              text: 'Implement a stack and a queue from scratch in Python without using built-in structures. Then implement a min stack. Write tests for each.',
              steps: [
                { id: 'p2-w03-t3-s1', text: 'Implement Stack class with push(val), pop() → val, peek() → val, and is_empty() → bool — back it with a plain list but wrap every operation in a method.' },
                { id: 'p2-w03-t3-s2', text: 'Implement Queue using two stacks internally — push to stack1, when dequeuing transfer all of stack1 to stack2 if stack2 is empty, then pop from stack2. This gives amortised O(1) per operation.' },
                { id: 'p2-w03-t3-s3', text: 'Implement MinStack with push(val), pop(), top() → val, and get_min() → val — all O(1). Verify that get_min() returns the correct minimum after a sequence of pushes and pops.' },
                { id: 'p2-w03-t3-s4', text: 'Write pytest tests for each class: empty state, single element, multiple elements, pop-then-peek, and for MinStack verify the minimum updates correctly after popping the current minimum.' },
              ],
            },
            {
              id: 'p2-w03-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 55 problems.',
              steps: [
                { id: 'p2-w03-t4-s1', text: 'At 55 problems you should be able to recognise a stack problem on sight — "matching pairs", "track previous state", or "next greater/smaller element" are all stack-shaped.' },
                { id: 'p2-w03-t4-s2', text: 'If you\'re short on count, solve the remaining problems from this week\'s list before starting linked lists.' },
              ],
            },
          ],
          notes:
            'Monotonic stack is a common pattern in Amazon OA hard problems. Recognize it: "next greater element" or "previous smaller element" phrasing.',
        },
        {
          id: 'p2-w04',
          title: 'Week 23–24: Linked lists',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w04-t1',
              type: 'learn',
              text: 'Singly vs doubly linked lists. Pointer manipulation — draw every step on paper before touching code. Fast and slow pointer technique.',
              steps: [
                { id: 'p2-w04-t1-s1', text: 'Draw a 5-node linked list on paper: boxes for nodes, arrows for next pointers, a separate "head" arrow. Draw what happens to those arrows when you reverse the list — identify each pointer reassignment before writing a line of code.' },
                { id: 'p2-w04-t1-s2', text: 'Implement Node(val, next=None) — create a 5-node list manually by chaining nodes, then write a print_list() helper that traverses and prints each value.' },
                { id: 'p2-w04-t1-s3', text: 'Fast/slow pointer: fast moves 2 nodes per step, slow moves 1. When fast hits None, slow is at the midpoint. Verify this on a 5-node list and a 6-node list — draw the positions at each step.' },
                { id: 'p2-w04-t1-s4', text: 'Cycle detection: if fast and slow ever point to the same node, there\'s a cycle. If fast reaches None first, there\'s no cycle. Trace this logic on a list where node 5 points back to node 3.' },
              ],
            },
            {
              id: 'p2-w04-t2',
              type: 'practice',
              text: 'LeetCode: Reverse Linked List, Merge Two Sorted Lists, Reorder List, Remove Nth Node From End of List, Linked List Cycle, LRU Cache.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w04-t2-s1', text: 'Reverse Linked List (#206): three pointers — prev=None, curr=head, next_node=None. At each step: save curr.next, point curr.next backward, advance prev and curr. Draw this on paper first.' },
                { id: 'p2-w04-t2-s2', text: 'Merge Two Sorted Lists (#21): create a dummy head node — this eliminates the special case of building the very first node of the result. Return dummy.next at the end.' },
                { id: 'p2-w04-t2-s3', text: 'Remove Nth Node From End (#19): two pointers with a gap of n — advance the fast pointer n steps first, then move both until fast hits None. Slow is now at the node before the one to delete.' },
                { id: 'p2-w04-t2-s4', text: 'Linked List Cycle (#141): fast/slow pointers — if they meet, there\'s a cycle. The meet point is not necessarily the cycle start; that requires a second step if asked.' },
                { id: 'p2-w04-t2-s5', text: 'LRU Cache (#146): doubly linked list + hash map. The list tracks access order (most recent at head), the map provides O(1) lookup by key. Understand the data structure design before writing code.' },
              ],
            },
            {
              id: 'p2-w04-t3',
              type: 'build',
              text: 'Implement a singly linked list from scratch: Node class, insert, delete, search, reverse. Write tests.',
              steps: [
                { id: 'p2-w04-t3-s1', text: 'Implement Node(val, next=None) and LinkedList with insert_at_head(val), insert_at_tail(val), delete_by_value(val), search(val) → bool, and to_list() → list for easy testing.' },
                { id: 'p2-w04-t3-s2', text: 'Implement reverse() iteratively using three pointers — do not use recursion here, the iterative version is what you\'ll need to explain in an interview.' },
                { id: 'p2-w04-t3-s3', text: 'Write tests: empty list operations, single node, even/odd length lists, reversing then reversing again should equal the original, deleting from head/tail/middle.' },
                { id: 'p2-w04-t3-s4', text: 'Time yourself: can you implement the full linked list from scratch in under 20 minutes? If not, practice until you can — this is a common warm-up question in Amazon interviews.' },
              ],
            },
            {
              id: 'p2-w04-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 65 problems.',
              steps: [
                { id: 'p2-w04-t4-s1', text: 'Linked list problems are pointer manipulation problems. If any of this week\'s problems still feel unclear, re-draw the pointer states on paper — not on a screen.' },
                { id: 'p2-w04-t4-s2', text: 'Check count — aim for 65 before moving to binary search. Linked list bugs from incomplete understanding compound into tree and graph problems later.' },
              ],
            },
          ],
          notes:
            'Linked list problems are pointer manipulation problems. Draw every step on paper. Bugs in linked list code almost always come from skipping this.',
        },
        {
          id: 'p2-w05',
          title: 'Week 25–26: Binary search',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w05-t1',
              type: 'learn',
              text: 'Classic binary search template (lo, hi, mid). Search on answer space — not just sorted arrays. When the array must be sorted vs when it does not need to be.',
              steps: [
                { id: 'p2-w05-t1-s1', text: 'Memorise the template: lo, hi = 0, len(nums)-1; while lo <= hi: mid = lo + (hi-lo)//2. Use lo + (hi-lo)//2 — not (lo+hi)//2 — to avoid integer overflow, even in Python where ints are arbitrary precision.' },
                { id: 'p2-w05-t1-s2', text: 'The three cases: nums[mid] == target → found; nums[mid] < target → lo = mid + 1; nums[mid] > target → hi = mid - 1. Write these from memory without looking.' },
                { id: 'p2-w05-t1-s3', text: 'Search on answer space: instead of searching an array, you\'re searching a range of possible answers. The question becomes "is this answer feasible?" rather than "is this the value?"' },
                { id: 'p2-w05-t1-s4', text: 'Identify the answer-space pattern: "find the minimum X such that condition Y is true" — binary search between the minimum and maximum possible X, using the condition as the predicate.' },
              ],
            },
            {
              id: 'p2-w05-t2',
              type: 'practice',
              text: 'LeetCode: Binary Search, Search a 2D Matrix, Koko Eating Bananas, Find Minimum in Rotated Sorted Array, Search in Rotated Sorted Array, Time Based Key-Value Store.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w05-t2-s1', text: 'Binary Search (#704): implement from the template — this is the baseline, solve it in under 5 minutes.' },
                { id: 'p2-w05-t2-s2', text: 'Search a 2D Matrix (#74): treat the m×n matrix as a 1D sorted array of length m*n — row = mid // n, col = mid % n.' },
                { id: 'p2-w05-t2-s3', text: 'Koko Eating Bananas (#875): answer-space search — binary search on the speed k between 1 and max(piles). The predicate is "can Koko eat all piles in h hours at speed k?"' },
                { id: 'p2-w05-t2-s4', text: 'Find Minimum in Rotated Sorted Array (#153): the minimum is in the unsorted half — if nums[mid] > nums[hi], the minimum is in the right half; otherwise the left half.' },
                { id: 'p2-w05-t2-s5', text: 'Search in Rotated Sorted Array (#33): determine which half is sorted, check if the target is in that half, then recurse — this requires careful case analysis, draw it out first.' },
              ],
            },
            {
              id: 'p2-w05-t3',
              type: 'amazon',
              text: 'Review Amazon\'s internal job board (A to Z). Note which SDE teams have openings. What tech stacks and domains show up repeatedly? Start forming your target team list.',
              steps: [
                { id: 'p2-w05-t3-s1', text: 'Navigate to the Amazon internal job board (A to Z → Jobs), search "Software Development Engineer", and filter by location or org as needed.' },
                { id: 'p2-w05-t3-s2', text: 'For each relevant opening, note: team name, tech stack mentioned in the JD, and whether the domain overlaps with your background (infrastructure, cloud, tooling, automation).' },
                { id: 'p2-w05-t3-s3', text: 'Look for patterns across 10–15 postings: which tech stacks appear most often? Java? Python? TypeScript? CDK? This signals where to invest Phase 3 language work.' },
                { id: 'p2-w05-t3-s4', text: 'Save 3–5 specific role descriptions that genuinely interest you — you\'ll revisit these in Phase 4 when building your application strategy.' },
              ],
            },
            {
              id: 'p2-w05-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 75 problems.',
              steps: [
                { id: 'p2-w05-t4-s1', text: 'Write the binary search template from memory right now — if you hesitate at any step, you don\'t have it yet.' },
                { id: 'p2-w05-t4-s2', text: 'Check your count — aim for 75 before starting trees. Binary search is a prerequisite for understanding many tree and graph optimisations.' },
              ],
            },
          ],
          notes:
            'Binary search on answer space (e.g., "what is the minimum X such that condition Y is true?") is a common Medium and Hard pattern.',
        },
        {
          id: 'p2-w06',
          title: 'Week 27–28: Trees — part 1, traversal and basics',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w06-t1',
              type: 'learn',
              text: 'Binary tree structure, DFS (inorder, preorder, postorder), BFS (level-order). Recursive vs iterative implementations for each. When to use which traversal.',
              steps: [
                { id: 'p2-w06-t1-s1', text: 'Implement inorder DFS (left → node → right) recursively: base case is None, recurse left, append node.val, recurse right. Verify on a 7-node tree — inorder on a BST gives sorted order.' },
                { id: 'p2-w06-t1-s2', text: 'Implement inorder DFS iteratively using an explicit stack: push nodes going left, pop and process when you can\'t go further left, then move right. This is harder than recursive — draw it.' },
                { id: 'p2-w06-t1-s3', text: 'Implement preorder (node → left → right) and postorder (left → right → node) both recursively — postorder is used for deleting trees and evaluating expression trees.' },
                { id: 'p2-w06-t1-s4', text: 'Implement BFS (level-order) using collections.deque: enqueue root, then for each node: dequeue, process, enqueue left child then right child if they exist.' },
                { id: 'p2-w06-t1-s5', text: 'Know when to use each: inorder on a BST → sorted sequence. Preorder → copy or serialise a tree. BFS → shortest path or level-by-level problems. DFS (any order) → path/depth/subtree problems.' },
              ],
            },
            {
              id: 'p2-w06-t2',
              type: 'practice',
              text: 'LeetCode: Invert Binary Tree, Maximum Depth of Binary Tree, Diameter of Binary Tree, Balanced Binary Tree, Same Tree, Subtree of Another Tree, Level Order Traversal.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w06-t2-s1', text: 'Invert Binary Tree (#226): swap left and right children at every node — one line with recursion: root.left, root.right = invert(root.right), invert(root.left).' },
                { id: 'p2-w06-t2-s2', text: 'Maximum Depth (#104): 1 + max(depth(left), depth(right)), base case: if not root: return 0. This is the simplest recursive tree problem — make sure it\'s instant.' },
                { id: 'p2-w06-t2-s3', text: 'Diameter of Binary Tree (#543): for each node, the diameter through it = height(left) + height(right). Track a global maximum across all nodes — the answer is not always through the root.' },
                { id: 'p2-w06-t2-s4', text: 'Level Order Traversal (#102): BFS — group nodes by level using a nested loop: process all nodes currently in the queue (that\'s one level), then enqueue their children.' },
                { id: 'p2-w06-t2-s5', text: 'Same Tree (#100): recursively check if both are None (True), one is None (False), or values differ (False) — otherwise check both subtrees. The structure matches the recursive definition.' },
              ],
            },
            {
              id: 'p2-w06-t3',
              type: 'build',
              text: 'Implement a binary tree from scratch with all three DFS traversals both recursively and iteratively. Write tests.',
              steps: [
                { id: 'p2-w06-t3-s1', text: 'Implement TreeNode(val, left=None, right=None) and a BinaryTree class with an insert_bst(val) method for building test trees.' },
                { id: 'p2-w06-t3-s2', text: 'Implement all three DFS traversals recursively: inorder, preorder, postorder — each returns a list of values.' },
                { id: 'p2-w06-t3-s3', text: 'Implement inorder iteratively using an explicit stack — this is the hardest of the three iterative versions and is commonly asked in interviews.' },
                { id: 'p2-w06-t3-s4', text: 'Implement BFS using collections.deque returning a list of lists (one list per level).' },
                { id: 'p2-w06-t3-s5', text: 'Write tests on a 7-node complete binary tree: verify the exact traversal order for each method, and that BFS returns the correct level groupings.' },
              ],
            },
            {
              id: 'p2-w06-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 85 problems.',
              steps: [
                { id: 'p2-w06-t4-s1', text: 'Trees are the most tested data structure in FAANG interviews. If any traversal still requires thought to write, spend an extra session drilling it before moving to BST.' },
                { id: 'p2-w06-t4-s2', text: 'Check count — aim for 85. If you\'re short, prioritise the tree problems from this week before starting BST content.' },
              ],
            },
          ],
          notes:
            'Trees are the single most tested data structure in FAANG interviews. If traversals do not feel automatic, add another week before moving on.',
        },
        {
          id: 'p2-w07',
          title: 'Week 29–30: Trees — part 2, BST and advanced patterns',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w07-t1',
              type: 'learn',
              text: 'Binary Search Tree properties, insert, delete, search. Lowest Common Ancestor pattern. Path sum problems. Serialize and deserialize.',
              links: [
                { label: 'Grokking Algorithms (book)', url: 'https://www.manning.com/books/grokking-algorithms' },
                { label: 'collections.deque docs', url: 'https://docs.python.org/3/library/collections.html#collections.deque' },
              ],
              steps: [
                { id: 'p2-w07-t1-s1', text: 'BST property: every node\'s left subtree contains only values less than the node, right subtree only values greater. Inorder traversal of a valid BST always produces a sorted sequence — use this to validate.' },
                { id: 'p2-w07-t1-s2', text: 'Implement BST insert iteratively: start at root, go left if val < node.val, go right if val > node.val, insert when you find None.' },
                { id: 'p2-w07-t1-s3', text: 'BST delete is the hardest case: deleting a node with two children requires finding the inorder successor (smallest value in the right subtree), copying its value up, then deleting the successor.' },
                { id: 'p2-w07-t1-s4', text: 'Lowest Common Ancestor on a BST: if both values are less than root.val → go left; if both greater → go right; otherwise root is the LCA. This is O(h), not O(n).' },
              ],
            },
            {
              id: 'p2-w07-t2',
              type: 'practice',
              text: 'LeetCode: Validate Binary Search Tree, Kth Smallest Element in BST, Construct Binary Tree from Preorder and Inorder Traversal, Binary Tree Maximum Path Sum, Serialize and Deserialize Binary Tree.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w07-t2-s1', text: 'Validate BST (#98): pass min/max bounds down the recursion — is_valid(node, min_val, max_val). Checking only left < root < right is wrong; every node in the left subtree must be less than all ancestors.' },
                { id: 'p2-w07-t2-s2', text: 'Kth Smallest in BST (#230): inorder traversal gives sorted order — count nodes as you traverse and stop at k.' },
                { id: 'p2-w07-t2-s3', text: 'Binary Tree Maximum Path Sum (#124): at each node, the max gain from that subtree = node.val + max(0, left_gain, right_gain). The path through a node = node.val + max(0, left_gain) + max(0, right_gain). Track the global max separately.' },
                { id: 'p2-w07-t2-s4', text: 'Serialize/Deserialize (#297): preorder DFS with "null" markers for missing children — use a deque when deserialising to consume nodes in order.' },
              ],
            },
            {
              id: 'p2-w07-t3',
              type: 'build',
              text: 'Implement a BST from scratch with insert, delete, search, all traversals, and a method to validate BST property. Write tests.',
              steps: [
                { id: 'p2-w07-t3-s1', text: 'Implement BST with insert(val), search(val) → bool, delete(val), and all three DFS traversals returning sorted lists.' },
                { id: 'p2-w07-t3-s2', text: 'Implement is_valid_bst() that verifies the BST property using the min/max bounds approach — not just checking immediate children.' },
                { id: 'p2-w07-t3-s3', text: 'Write tests: insert 10 values in non-sorted order, verify inorder gives sorted output, delete the root and verify the tree is still valid, search for present and absent values.' },
              ],
            },
            {
              id: 'p2-w07-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 93 problems.',
              steps: [
                { id: 'p2-w07-t4-s1', text: 'Can you write a recursive tree DFS from scratch in 2 minutes without referencing anything? That\'s the baseline for tree problems in interviews.' },
                { id: 'p2-w07-t4-s2', text: 'Check count — aim for 93 before moving to heaps.' },
              ],
            },
          ],
          notes: 'Resource: Grokking Algorithms by Aditya Bhargava — visual explanations of trees and recursion. ISBN 978-1617292231. | Python collections.deque — docs.python.org/3/library/collections.html#collections.deque',
        },
        {
          id: 'p2-w08',
          title: 'Week 31–32: Heaps and priority queues',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w08-t1',
              type: 'learn',
              text: 'Min heap vs max heap. Python\'s heapq module (docs.python.org/3/library/heapq.html — min-heap only, learn the negate-value trick for max-heap). K-largest and K-smallest patterns. Two-heap pattern for median problems.',
              links: [
                { label: 'heapq docs', url: 'https://docs.python.org/3/library/heapq.html' },
              ],
              steps: [
                { id: 'p2-w08-t1-s1', text: 'Min heap: import heapq; heap = []; heapq.heappush(heap, 3); heapq.heappop(heap) — verify the smallest element always comes out first. Convert a list to a heap in-place with heapq.heapify(lst) in O(n).' },
                { id: 'p2-w08-t1-s2', text: 'Max heap trick: negate values before pushing, negate again after popping — heapq.heappush(heap, -val) then -heapq.heappop(heap). Python\'s heapq has no native max-heap.' },
                { id: 'p2-w08-t1-s3', text: 'K-smallest pattern: push all elements, call heapq.nsmallest(k, iterable). K-largest: push each element to a min-heap of size k, pop when size exceeds k — the remaining k elements are the largest.' },
                { id: 'p2-w08-t1-s4', text: 'Two-heap median pattern: max-heap for the lower half, min-heap for the upper half. Keep their sizes within 1 of each other — the median is always computable from the two tops without sorting.' },
              ],
            },
            {
              id: 'p2-w08-t2',
              type: 'practice',
              text: 'LeetCode: Kth Largest Element in an Array, K Closest Points to Origin, Find Median from Data Stream, Task Scheduler, Design Twitter.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w08-t2-s1', text: 'Kth Largest Element (#215): min-heap of size k — push each element, pop when size > k. The top of the heap after processing all elements is the kth largest.' },
                { id: 'p2-w08-t2-s2', text: 'K Closest Points to Origin (#973): same k-heap pattern but use Euclidean distance (x²+y²) as the sort key — no need to take the square root.' },
                { id: 'p2-w08-t2-s3', text: 'Find Median from Data Stream (#295): two-heap approach — practice rebalancing the heaps on every addNum call until the logic feels automatic.' },
                { id: 'p2-w08-t2-s4', text: 'Task Scheduler (#621): count task frequencies, the most frequent task determines the minimum idle time — this is a greedy/math problem that uses a max-heap to simulate scheduling.' },
              ],
            },
            {
              id: 'p2-w08-t3',
              type: 'build',
              text: 'Implement a min heap from scratch: insert, extract_min, heapify. Write tests.',
              steps: [
                { id: 'p2-w08-t3-s1', text: 'Implement MinHeap backed by a list. insert(val): append to the end, then bubble up by swapping with the parent while the parent is larger.' },
                { id: 'p2-w08-t3-s2', text: 'Implement extract_min(): swap root with the last element, pop the last, then bubble down by swapping with the smaller child until the heap property is restored.' },
                { id: 'p2-w08-t3-s3', text: 'Implement heapify(lst): build a heap from an unsorted list in O(n) by calling sift_down from len//2 down to 0.' },
                { id: 'p2-w08-t3-s4', text: 'Write tests: insert 10 random values, verify extract_min returns them in sorted order; heapify a shuffled list and verify extract_min sequence is sorted.' },
              ],
            },
            {
              id: 'p2-w08-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 100 problems.',
              steps: [
                { id: 'p2-w08-t4-s1', text: '100 problems is a meaningful milestone — you now have exposure to all the fundamental patterns. The next phase builds on these heavily.' },
                { id: 'p2-w08-t4-s2', text: 'Heaps appear constantly in Amazon OAs. The "top K elements" pattern is nearly guaranteed in at least one OA problem — you should be able to recognise it in under 30 seconds.' },
              ],
            },
          ],
          notes:
            'Heaps appear constantly in Amazon OAs. The "top K elements" pattern is nearly guaranteed in at least one OA problem. Recognize it immediately.',
        },
        {
          id: 'p2-w09',
          title: 'Week 33–34: Graphs — part 1, BFS and DFS',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w09-t1',
              type: 'learn',
              text: 'Graph representations: adjacency list vs adjacency matrix. BFS with a queue for shortest path in unweighted graphs. DFS with recursion or explicit stack. Cycle detection. Connected components.',
              steps: [
                { id: 'p2-w09-t1-s1', text: 'Build an adjacency list from an edge list: from collections import defaultdict; graph = defaultdict(list); for u, v in edges: graph[u].append(v); graph[v].append(u).' },
                { id: 'p2-w09-t1-s2', text: 'BFS template: queue = deque([start]); visited = {start}; while queue: node = queue.popleft(); for nei in graph[node]: if nei not in visited: visited.add(nei); queue.append(nei).' },
                { id: 'p2-w09-t1-s3', text: 'DFS template (recursive): def dfs(node, visited): visited.add(node); for nei in graph[node]: if nei not in visited: dfs(nei, visited).' },
                { id: 'p2-w09-t1-s4', text: 'Cycle detection (undirected): DFS with a parent parameter — if you visit a node that\'s already in visited and it\'s not the parent, there\'s a cycle.' },
                { id: 'p2-w09-t1-s5', text: 'Connected components: run DFS/BFS from every unvisited node, incrementing a counter each time you start fresh — each fresh start is a new component.' },
              ],
            },
            {
              id: 'p2-w09-t2',
              type: 'practice',
              text: 'LeetCode: Number of Islands, Clone Graph, Max Area of Island, Pacific Atlantic Water Flow, Surrounded Regions, Rotting Oranges.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w09-t2-s1', text: 'Number of Islands (#200): grid BFS/DFS — treat each cell as a node, mark visited by setting it to "0". Count the number of times you start a fresh BFS/DFS.' },
                { id: 'p2-w09-t2-s2', text: 'Clone Graph (#133): BFS with a hash map from original node → cloned node — when you visit a node, check if a clone already exists before creating a new one.' },
                { id: 'p2-w09-t2-s3', text: 'Pacific Atlantic Water Flow (#417): reverse the problem — BFS inward from the Pacific border and from the Atlantic border separately, then return cells reachable from both.' },
                { id: 'p2-w09-t2-s4', text: 'Rotting Oranges (#994): multi-source BFS — add all initially rotten oranges to the queue at the start, then spread one step per "minute". The answer is the number of BFS levels needed.' },
              ],
            },
            {
              id: 'p2-w09-t3',
              type: 'build',
              text: 'Implement BFS and DFS on an adjacency list graph from scratch. Write a function to detect cycles. Write tests.',
              steps: [
                { id: 'p2-w09-t3-s1', text: 'Implement Graph class with add_edge(u, v), bfs(start) → list, dfs(start) → list, and has_cycle() → bool.' },
                { id: 'p2-w09-t3-s2', text: 'BFS returns nodes in the order visited. DFS returns nodes in DFS order. Both skip already-visited nodes.' },
                { id: 'p2-w09-t3-s3', text: 'Write tests with: a disconnected graph (BFS from one node shouldn\'t visit the other component), a graph with a cycle, a linear chain (cycle detection should return False), a graph where adding one more edge creates a cycle.' },
              ],
            },
            {
              id: 'p2-w09-t4',
              type: 'amazon',
              text: 'Attend an Amazon internal tech talk or team demo. Start building your mental list of teams you would want to join.',
              steps: [
                { id: 'p2-w09-t4-s1', text: 'Find an upcoming internal tech talk on the Amazon events calendar or Slack — search for "tech talk", "demo day", or "engineering" in internal channels.' },
                { id: 'p2-w09-t4-s2', text: 'After attending: note the team name, the problem they\'re solving, and the tech stack they use. Is this a team you\'d want to join? Why or why not?' },
                { id: 'p2-w09-t4-s3', text: 'Add the team to your running list of 5–10 target teams you\'re building toward Phase 4.' },
              ],
            },
            {
              id: 'p2-w09-t5',
              type: 'practice',
              text: 'LeetCode running total: aim for 108 problems.',
              steps: [
                { id: 'p2-w09-t5-s1', text: 'Most graph problems are grid BFS/DFS in disguise. The hard part is recognising that a problem IS a graph problem — "connected regions", "spreading", and "shortest path" are the signal words.' },
                { id: 'p2-w09-t5-s2', text: 'Check count — aim for 108 before starting advanced graph topics.' },
              ],
            },
          ],
          notes:
            'Most graph problems are just "run BFS or DFS on this grid or adjacency list." The hard part is recognizing that a problem IS a graph problem. Practice that recognition.',
        },
        {
          id: 'p2-w10',
          title: 'Week 35–36: Graphs — part 2, Dijkstra, Union-Find, topological sort',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w10-t1',
              type: 'learn',
              text: 'Dijkstra\'s algorithm for weighted shortest paths (use heapq). Union-Find (disjoint set union) for connected components and cycle detection. Topological sort (Kahn\'s algorithm and DFS-based) for DAGs.',
              steps: [
                { id: 'p2-w10-t1-s1', text: 'Dijkstra: min-heap of (distance, node) tuples. Initialise all distances to infinity except source = 0. Pop the minimum, relax each neighbour (update distance if shorter path found), push to heap.' },
                { id: 'p2-w10-t1-s2', text: 'Union-Find: implement find(x) with path compression (point directly to root on each lookup) and union(x, y) with union by rank (attach smaller tree under larger). Memorise these two optimisations — they make UF nearly O(1) per operation.' },
                { id: 'p2-w10-t1-s3', text: 'Kahn\'s topological sort: count in-degrees for all nodes; enqueue nodes with in-degree 0; when dequeuing a node, decrement its neighbours\' in-degrees and enqueue any that reach 0. If the result has fewer nodes than the graph, there\'s a cycle.' },
                { id: 'p2-w10-t1-s4', text: 'DFS-based topological sort: postorder DFS, append each node after all its descendants are processed, then reverse the result.' },
              ],
            },
            {
              id: 'p2-w10-t2',
              type: 'practice',
              text: 'LeetCode: Course Schedule, Course Schedule II, Network Delay Time, Redundant Connection, Word Ladder, Swim in Rising Water.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w10-t2-s1', text: 'Course Schedule (#207): topological sort — if Kahn\'s result has fewer nodes than numCourses, there\'s a cycle and you can\'t finish all courses.' },
                { id: 'p2-w10-t2-s2', text: 'Course Schedule II (#210): same as above but return the topological order instead of True/False.' },
                { id: 'p2-w10-t2-s3', text: 'Network Delay Time (#743): Dijkstra from the source node — the answer is max(dist.values()), or -1 if any node is unreachable.' },
                { id: 'p2-w10-t2-s4', text: 'Redundant Connection (#684): Union-Find — process edges in order; the first edge where both endpoints are already in the same component is the redundant one.' },
              ],
            },
            {
              id: 'p2-w10-t3',
              type: 'build',
              text: 'Implement Union-Find from scratch with union by rank and path compression. Write tests.',
              steps: [
                { id: 'p2-w10-t3-s1', text: 'Implement UnionFind(n) with parent = list(range(n)) and rank = [0]*n.' },
                { id: 'p2-w10-t3-s2', text: 'find(x): if parent[x] != x: parent[x] = find(parent[x]) (path compression); return parent[x].' },
                { id: 'p2-w10-t3-s3', text: 'union(x, y): find roots of both; if same root, return False (already connected / cycle detected); otherwise attach by rank, return True.' },
                { id: 'p2-w10-t3-s4', text: 'Write tests: union a chain of 5 nodes and verify they\'re all in one component; add an edge that creates a cycle and verify union returns False; check connected(x, y) for nodes in and out of the same component.' },
              ],
            },
            {
              id: 'p2-w10-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 115 problems.',
              steps: [
                { id: 'p2-w10-t4-s1', text: 'Topological sort signals: "dependency ordering", "prerequisite chains", "course scheduling" — if the problem description contains these phrases, reach for Kahn\'s algorithm.' },
                { id: 'p2-w10-t4-s2', text: 'Check count — aim for 115 before starting dynamic programming.' },
              ],
            },
          ],
          notes:
            'Topological sort appears in "dependency ordering" problems — very common in Amazon system contexts. Course Schedule is the canonical example.',
        },
        {
          id: 'p2-w11',
          title: 'Week 37–38: Dynamic programming — part 1, 1D problems',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w11-t1',
              type: 'learn',
              text: 'DP mindset: overlapping subproblems and optimal substructure. Memoization (top-down recursion + cache) vs tabulation (bottom-up array). How to identify that a problem has DP structure.',
              links: [
                { label: 'Neetcode DP section', url: 'https://neetcode.io/roadmap' },
              ],
              steps: [
                { id: 'p2-w11-t1-s1', text: 'Recognise DP: the problem asks for a count, maximum, or minimum; you can define a subproblem in terms of a smaller version of itself; the same subproblems recur. "How many ways...", "minimum cost to...", "longest subsequence..." are DP signals.' },
                { id: 'p2-w11-t1-s2', text: 'Three-pass method — apply it to every DP problem this week: (1) write the brute force recursive solution, even O(2^n); (2) add memoisation with @functools.lru_cache(None); (3) convert to bottom-up tabulation.' },
                { id: 'p2-w11-t1-s3', text: 'Memoisation: add @functools.lru_cache(maxsize=None) above the recursive function — this caches results by arguments and turns O(2^n) into O(n) automatically.' },
                { id: 'p2-w11-t1-s4', text: 'Tabulation: identify base cases, create a dp array, fill it bottom-up with dp[i] expressed in terms of smaller indices. The loop structure mirrors the recursion structure.' },
                { id: 'p2-w11-t1-s5', text: 'Space optimisation: if dp[i] only depends on dp[i-1], you can replace the array with two variables — prev and curr. Apply this as a final step once the tabulation is working.' },
              ],
            },
            {
              id: 'p2-w11-t2',
              type: 'practice',
              text: 'LeetCode: Climbing Stairs, House Robber, House Robber II, Longest Palindromic Substring, Palindromic Substrings, Decode Ways.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w11-t2-s1', text: 'Climbing Stairs (#70): dp[i] = dp[i-1] + dp[i-2] — this is Fibonacci. Solve it all three ways: recursion, memoisation, tabulation. The tabulation version reduces to two variables.' },
                { id: 'p2-w11-t2-s2', text: 'House Robber (#198): dp[i] = max(dp[i-1], dp[i-2] + nums[i]) — at each house, decide to rob (add to dp[i-2]) or skip (carry dp[i-1]).' },
                { id: 'p2-w11-t2-s3', text: 'House Robber II (#213): circular array — run House Robber on nums[0:-1] and nums[1:] separately, return the max of both. Understand why you can\'t include both the first and last house.' },
                { id: 'p2-w11-t2-s4', text: 'Decode Ways (#91): dp[i] depends on one-digit decode (if s[i] != "0") and two-digit decode (if 10 ≤ int(s[i-1:i+1]) ≤ 26). Leading zeros invalidate decodings.' },
              ],
            },
            {
              id: 'p2-w11-t3',
              type: 'build',
              text: 'For each DP problem: write the brute force recursion first, add memoization second, convert to tabulation third. Three passes per problem.',
              steps: [
                { id: 'p2-w11-t3-s1', text: 'Pick House Robber and apply all three passes: brute force recursive (exponential), memoised (O(n) time, O(n) space), tabulated (O(n) time, O(n) space), then space-optimised (O(1) space).' },
                { id: 'p2-w11-t3-s2', text: 'Do the same for Climbing Stairs — verify that the final space-optimised version is just maintaining prev and curr variables in a loop.' },
                { id: 'p2-w11-t3-s3', text: 'The three-pass method is not optional — candidates who skip to tabulation without understanding the recursion get stuck when the tabulation transition is non-obvious.' },
              ],
            },
            {
              id: 'p2-w11-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 122 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w11-t4-s1', text: 'Open your LeetCode profile and check the total solved count — it should show at least 122 problems.' },
                { id: 'p2-w11-t4-s2', text: 'If under 122: identify the gap, pick Easy/Medium DP or graph problems (whichever category is lower), and close it before moving to Week 39–40.' },
              ],
            },
          ],
          notes:
            'DP is the hardest topic in this phase. Do not rush it. Two weeks is the minimum — it often needs more. The three-pass approach is non-negotiable.',
        },
        {
          id: 'p2-w12',
          title: 'Week 39–40: Dynamic programming — part 2, 2D and review',
          hours: '8 hrs',
          tasks: [
            {
              id: 'p2-w12-t1',
              type: 'learn',
              text: '2D DP: grid problems, string comparison problems (edit distance, longest common subsequence). Knapsack pattern — 0/1 knapsack and unbounded knapsack.',
              links: [
                { label: 'Grokking Dynamic Programming', url: 'https://www.designgurus.io/course/grokking-dynamic-programming' },
                { label: 'System Design Primer (DP section)', url: 'https://github.com/donnemartin/system-design-primer' },
              ],
              steps: [
                { id: 'p2-w12-t1-s1', text: 'Grid DP — Unique Paths: define dp[i][j] as the number of ways to reach cell (i, j). Base case: dp[0][j] = dp[i][0] = 1. Recurrence: dp[i][j] = dp[i-1][j] + dp[i][j-1]. Fill in a 3×3 grid by hand before coding.' },
                { id: 'p2-w12-t1-s2', text: 'LCS: dp[i][j] = length of longest common subsequence of s1[:i] and s2[:j]. Base case: dp[0][j] = dp[i][0] = 0. Recurrence: if chars match, dp[i][j] = dp[i-1][j-1] + 1; otherwise dp[i][j] = max(dp[i-1][j], dp[i][j-1]).' },
                { id: 'p2-w12-t1-s3', text: 'Edit Distance: dp[i][j] = minimum operations to convert s1[:i] to s2[:j]. Three transitions: insert = dp[i][j-1]+1, delete = dp[i-1][j]+1, replace = dp[i-1][j-1] (if chars match) or dp[i-1][j-1]+1 (if they differ).' },
                { id: 'p2-w12-t1-s4', text: '0/1 Knapsack: item can be taken or left. dp[i][w] = max value using first i items with capacity w. For each item: skip it (dp[i-1][w]) or take it (dp[i-1][w-weight[i]] + value[i]) — take the max.' },
                { id: 'p2-w12-t1-s5', text: 'Unbounded Knapsack: item can be reused. Key difference from 0/1: when you take an item, stay on row i instead of stepping back to i-1 — dp[w] = max(dp[w], dp[w-weight[i]] + value[i]).' },
                { id: 'p2-w12-t1-s6', text: 'For every pattern: fill in a small example table by hand before coding. 2D DP bugs are almost always off-by-one or wrong base case errors — seeing the table catches them before they reach the code.' },
              ],
            },
            {
              id: 'p2-w12-t2',
              type: 'practice',
              text: 'LeetCode: Unique Paths, Longest Common Subsequence, Edit Distance, Coin Change, Coin Change II, Target Sum, Interleaving String.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w12-t2-s1', text: 'Unique Paths (#62): build the dp table. Then do Unique Paths II (#63) with obstacles — extend your solution. Refactor to a 1D rolling array (O(n) space).' },
                { id: 'p2-w12-t2-s2', text: 'Longest Common Subsequence (#1143): implement the 2D table approach, then refactor to 2-row space optimization. Trace through "abcde" vs "ace" by hand first.' },
                { id: 'p2-w12-t2-s3', text: 'Edit Distance (#72): implement all three operations (insert, delete, replace). After solving it, explain to yourself why each state transition maps to one of those operations.' },
                { id: 'p2-w12-t2-s4', text: 'Coin Change (#322): dp[amount] = min coins to make that amount. Bottom up from dp[0]=0. Coin Change II (#518): count distinct combinations — dp[amount] += dp[amount - coin] for each coin.' },
                { id: 'p2-w12-t2-s5', text: 'Target Sum (#494): recognize this as a 0/1 knapsack variant. Try memoized recursion first to build intuition, then convert to tabulation.' },
                { id: 'p2-w12-t2-s6', text: 'Interleaving String (#97): dp[i][j] = true if s1[:i] and s2[:j] can interleave to form s3[:i+j]. This is a 2D boolean DP — hardest of the set. Solve it last.' },
              ],
            },
            {
              id: 'p2-w12-t3',
              type: 'amazon',
              text: 'Start writing Leadership Principle stories. Pick 3 LPs and write rough STAR drafts. You have 20 years of material — this is your competitive advantage over most SDE candidates.',
              links: [
                { label: 'Amazon Leadership Principles', url: 'https://www.amazon.jobs/en/principles' },
              ],
              steps: [
                { id: 'p2-w12-t3-s1', text: 'Pick 3 LPs from this priority list: Customer Obsession, Ownership, Bias for Action, Deliver Results, Invent and Simplify. Choose the 3 you have the strongest career experiences for.' },
                { id: 'p2-w12-t3-s2', text: 'For each LP, spend 10 minutes brain-dumping 3–5 experiences from your career that relate to it. Don\'t filter yet — just list them. Projects, incidents, process changes, decisions made under pressure.' },
                { id: 'p2-w12-t3-s3', text: 'Select the strongest experience for each LP and write a rough STAR draft: Situation (1–2 sentences), Task (1 sentence), Action (3–5 sentences — first person, specific steps YOU took), Result (quantified if possible).' },
                { id: 'p2-w12-t3-s4', text: 'Rough draft quality check: Does it say "I" not "we"? Is the action section at least half the word count? Is the result measurable (% improvement, hours saved, incidents prevented, cost reduced)? Fix gaps.' },
                { id: 'p2-w12-t3-s5', text: 'Read each draft out loud and time it. Target 2–3 minutes. Under 90 seconds means add specificity to the Action section. Over 4 minutes means cut the Situation — it\'s almost always over-explained.' },
              ],
            },
            {
              id: 'p2-w12-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 130 problems. Go back and review every problem you got wrong — understand the pattern, not just the solution.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p2-w12-t4-s1', text: 'Verify your LeetCode solved count is at 130+. If not, close the gap with DP and graph problems before moving to Phase 3.' },
                { id: 'p2-w12-t4-s2', text: 'Go to your profile → filter submissions by Wrong Answer and Time Limit Exceeded. Work through every one — not to memorize the solution, but to clearly articulate the pattern you missed.' },
                { id: 'p2-w12-t4-s3', text: 'For each wrong answer: write a one-sentence summary of what you got wrong ("used BFS when DFS was needed," "didn\'t recognize the sliding window pattern," "off-by-one in the DP table"). Keep this list — it becomes your targeted study guide in Phase 4.' },
              ],
            },
          ],
          notes:
            'Phase 2 checkpoint: if you cannot solve a Medium in under 30 minutes and explain complexity, take 2 more weeks on targeted review before Phase 3.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PHASE 3 — Build Real Projects (Weeks 41–64, 34 tasks)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'phase-3',
      number: 3,
      title: 'Build Real Projects',
      duration: 'Months 11–16',
      length: '24 weeks',
      hoursPerWeek: '~8 hrs/week',
      goal:
        'Stop doing tutorials. Start shipping things a hiring manager would care about. Your AWS and IaC background lets you build more sophisticated cloud-native projects than most career-changers — lean into that advantage.',
      checkpoint:
        'Do you have 2 deployed projects on GitHub with READMEs, tests, and real functionality — not tutorials you followed? If yes, move to Phase 4. If not, extend and finish the projects before moving on.',
      weeks: [
        {
          id: 'p3-w01',
          title: 'Week 41–43: Project 1 kickoff — REST API with FastAPI',
          hours: '8 hrs/week',
          tasks: [
            {
              id: 'p3-w01-t1',
              type: 'learn',
              text: 'FastAPI fundamentals: routes, path parameters, query parameters, request bodies, Pydantic models for validation and serialization. Work through the official FastAPI docs start to finish.',
              links: [
                { label: 'FastAPI docs', url: 'https://fastapi.tiangolo.com' },
              ],
              steps: [
                { id: 'p3-w01-t1-s1', text: 'Install: pip install fastapi uvicorn[standard]. Create main.py with a single GET route: @app.get("/") def root(): return {"message": "hello"} — run with uvicorn main:app --reload and confirm it responds.' },
                { id: 'p3-w01-t1-s2', text: 'Path and query parameters: @app.get("/users/{user_id}") def get_user(user_id: int, active: bool = True) — FastAPI automatically validates types and returns HTTP 422 if they don\'t match.' },
                { id: 'p3-w01-t1-s3', text: 'Request bodies with Pydantic: define class UserCreate(BaseModel): name: str; email: str; age: int — use it as a POST body parameter and observe the auto-generated OpenAPI schema at /docs.' },
                { id: 'p3-w01-t1-s4', text: 'Visit /docs after every code change. FastAPI\'s automatic Swagger UI is one of its best features — use it to test every endpoint manually before writing automated tests.' },
                { id: 'p3-w01-t1-s5', text: 'Response models: add response_model=UserResponse to a route — FastAPI filters output to only the fields defined in UserResponse, preventing accidental leakage (e.g., password hashes).' },
                { id: 'p3-w01-t1-s6', text: 'Dependency injection: create a get_db() generator that yields a database session, then add db: Session = Depends(get_db) to route signatures — this is FastAPI\'s core pattern for sharing resources across requests.' },
              ],
            },
            {
              id: 'p3-w01-t2',
              type: 'build',
              text: 'Design your first API project around something you would actually use (M365 tenant health dashboard API, AWS resource inventory API, IaC drift detection service). Write the design doc before writing any code.',
              links: [
                { label: 'ADR template', url: 'https://github.com/joelparkerhenderson/architecture-decision-record' },
              ],
              steps: [
                { id: 'p3-w01-t2-s1', text: 'Pick a domain that combines your infrastructure background with software: M365 tenant health API, AWS resource inventory service, or IaC drift detection API. It should be something you would actually use at work.' },
                { id: 'p3-w01-t2-s2', text: 'Write a design doc (1–2 pages): what problem it solves, who the users are, what the API endpoints will be, what data it stores, and what external systems it calls. Writing forces precision that whiteboarding does not.' },
                { id: 'p3-w01-t2-s3', text: 'Define your data model: what entities exist (e.g., Tenant, ResourceCheck, AuditResult), what fields each has, and how they relate. Sketch an ER diagram — even a rough one catches design issues before migrations exist.' },
                { id: 'p3-w01-t2-s4', text: 'List API endpoints in a table: method, path, request body, response schema, auth required. This spec becomes your test matrix and README content.' },
                { id: 'p3-w01-t2-s5', text: 'Define v1 scope explicitly and list what is cut. A focused project you finish beats an ambitious project you abandon — scope cuts are not failure, they are engineering judgment.' },
              ],
            },
            {
              id: 'p3-w01-t3',
              type: 'learn',
              text: 'SQLAlchemy basics: defining models, sessions, CRUD operations (docs.sqlalchemy.org). Connect to a local PostgreSQL instance (run it in Docker — docs.docker.com/get-started/).',
              links: [
                { label: 'SQLAlchemy docs', url: 'https://docs.sqlalchemy.org' },
                { label: 'Docker get started', url: 'https://docs.docker.com/get-started/' },
              ],
              steps: [
                { id: 'p3-w01-t3-s1', text: 'Run PostgreSQL in Docker: docker run -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=dev -p 5432:5432 -d postgres:16. Connect with psql or a GUI like DBeaver to confirm it is running before writing any Python.' },
                { id: 'p3-w01-t3-s2', text: 'Define a SQLAlchemy model: class User(Base): __tablename__ = "users"; id = Column(Integer, primary_key=True); email = Column(String, unique=True, nullable=False). Call Base.metadata.create_all(engine) to generate the table.' },
                { id: 'p3-w01-t3-s3', text: 'CRUD with sessions: session.add(user), session.commit() (Create); session.query(User).filter_by(email=...).first() (Read); user.email = "new@example.com"; session.commit() (Update); session.delete(user); session.commit() (Delete).' },
                { id: 'p3-w01-t3-s4', text: 'Relationships: add user_id = Column(Integer, ForeignKey("users.id")) to a Post model, and posts = relationship("Post", back_populates="user") on User — then access user.posts without writing a JOIN.' },
                { id: 'p3-w01-t3-s5', text: 'Indexes: add index=True to any Column you query by frequently. Enable echo=True on your engine and verify the index appears in the CREATE TABLE output before disabling it.' },
              ],
            },
            {
              id: 'p3-w01-t4',
              type: 'practice',
              text: 'LeetCode: maintain 5 problems per week mixed Medium difficulty. Running total: aim for 145 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w01-t4-s1', text: 'Solve 5 LeetCode Mediums this week. Lean toward graph, DP, and sliding window problems — they appear most often in real Amazon interviews.' },
                { id: 'p3-w01-t4-s2', text: 'Check your running total. If below 145, prioritize LeetCode time over project work — interview skills decay faster than project code.' },
              ],
            },
          ],
          notes:
            'Resources: FastAPI docs — fastapi.tiangolo.com (official docs are excellent, start here before any tutorials) | SQLAlchemy — docs.sqlalchemy.org | Docker getting started — docs.docker.com/get-started/',
        },
        {
          id: 'p3-w02',
          title: 'Week 44–46: Project 1 — authentication, database, deployment',
          hours: '8 hrs/week',
          tasks: [
            {
              id: 'p3-w02-t1',
              type: 'build',
              text: 'Add JWT authentication to your API. Implement token generation, validation, and protected endpoints. Use fastapi-users (github.com/fastapi-users/fastapi-users) or implement manually to understand the flow.',
              links: [
                { label: 'fastapi-users', url: 'https://github.com/fastapi-users/fastapi-users' },
                { label: 'JWT explained', url: 'https://jwt.io/introduction/' },
              ],
              steps: [
                { id: 'p3-w02-t1-s1', text: 'Install: pip install python-jose[cryptography] passlib[bcrypt]. Understand what a JWT contains: header (algorithm), payload (user id, expiry), and signature — it is signed not encrypted, so never put sensitive data in the payload.' },
                { id: 'p3-w02-t1-s2', text: 'Token generation: create_access_token(data: dict, expires_delta: timedelta) — encode with jose.jwt.encode(), set exp to datetime.utcnow() + expires_delta, sign with SECRET_KEY and algorithm="HS256". Store SECRET_KEY in env vars.' },
                { id: 'p3-w02-t1-s3', text: 'POST /token endpoint: accept username + password form data (OAuth2PasswordRequestForm), verify password hash with passlib, return {"access_token": token, "token_type": "bearer"}.' },
                { id: 'p3-w02-t1-s4', text: 'Protected routes: create get_current_user(token: str = Depends(oauth2_scheme)) — decode the JWT, extract user_id, query the database, raise HTTPException(401) if the token is expired, tampered, or the user does not exist.' },
                { id: 'p3-w02-t1-s5', text: 'Test the full flow: POST /token → capture the token → call a protected endpoint with Authorization: Bearer {token} → then call it with an expired or tampered token and verify you get 401.' },
              ],
            },
            {
              id: 'p3-w02-t2',
              type: 'build',
              text: 'Connect to PostgreSQL via AWS RDS or a local Docker container. Run database migrations with Alembic (alembic.sqlalchemy.org). Model your data properly — indexes, constraints, relationships.',
              links: [
                { label: 'Alembic docs', url: 'https://alembic.sqlalchemy.org' },
                { label: 'AWS RDS Free Tier', url: 'https://aws.amazon.com/rds/free/' },
              ],
              steps: [
                { id: 'p3-w02-t2-s1', text: 'Initialize Alembic: alembic init alembic — edit alembic.ini to set sqlalchemy.url, and update alembic/env.py to import your SQLAlchemy Base so autogenerate sees your models.' },
                { id: 'p3-w02-t2-s2', text: 'Generate the first migration: alembic revision --autogenerate -m "initial_schema" — open the generated file and verify upgrade() and downgrade() look correct before running.' },
                { id: 'p3-w02-t2-s3', text: 'Apply: alembic upgrade head — confirm in psql or DBeaver that tables match your models. Learn alembic history and alembic current before touching production databases.' },
                { id: 'p3-w02-t2-s4', text: 'Add constraints and indexes: __table_args__ = (Index("ix_user_email", "email"), UniqueConstraint("username", name="uq_user_username")) — generate and verify a new migration captures them.' },
                { id: 'p3-w02-t2-s5', text: 'Optional RDS connection: create a PostgreSQL instance in RDS Free Tier, update DATABASE_URL to point at it, run alembic upgrade head — your schema now lives in a real cloud database.' },
              ],
            },
            {
              id: 'p3-w02-t3',
              type: 'build',
              text: 'Deploy to AWS: containerize with Docker, push image to ECR, run on ECS Fargate or App Runner. Use CDK or your existing IaC tooling.',
              links: [
                { label: 'AWS ECR docs', url: 'https://docs.aws.amazon.com/ecr/latest/userguide/getting-started-cli.html' },
                { label: 'AWS App Runner docs', url: 'https://docs.aws.amazon.com/apprunner/latest/dg/what-is-apprunner.html' },
                { label: 'AWS CDK v2 guide', url: 'https://docs.aws.amazon.com/cdk/v2/guide/home.html' },
              ],
              steps: [
                { id: 'p3-w02-t3-s1', text: 'Write a Dockerfile: use python:3.12-slim, COPY requirements.txt, RUN pip install --no-cache-dir -r requirements.txt, COPY app, EXPOSE 8000, CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]. Build and run locally first.' },
                { id: 'p3-w02-t3-s2', text: 'Push to ECR: create a repository with aws ecr create-repository, authenticate with aws ecr get-login-password | docker login, tag your image as {account}.dkr.ecr.{region}.amazonaws.com/{repo}:latest, push it.' },
                { id: 'p3-w02-t3-s3', text: 'Deploy with App Runner (simplest path): create a service from your ECR image, set environment variables for DATABASE_URL and SECRET_KEY, confirm the /docs endpoint is publicly accessible.' },
                { id: 'p3-w02-t3-s4', text: 'Alternatively use ECS Fargate with CDK: define a task definition, service, and ALB — your existing IaC knowledge makes this significantly faster than most candidates. Use it as a portfolio differentiator.' },
                { id: 'p3-w02-t3-s5', text: 'Verify the deployed API end to end: call GET /docs, POST /token to confirm auth works, and call an endpoint that queries the database to confirm connectivity to RDS.' },
              ],
            },
            {
              id: 'p3-w02-t4',
              type: 'practice',
              text: 'LeetCode: running total aim for 155 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w02-t4-s1', text: 'Maintain 5 problems per week. Prioritize medium graph and DP problems — they appear most frequently in Amazon OA.' },
                { id: 'p3-w02-t4-s2', text: 'Check your running total. Aim for 155 before moving to Project 1 testing and CI/CD week.' },
              ],
            },
          ],
          notes:
            'Lean hard into your AWS knowledge here. You can deploy things most junior candidates cannot. This is where your background becomes visible in your portfolio.',
        },
        {
          id: 'p3-w03',
          title: 'Week 47–48: Project 1 — tests, CI/CD, documentation',
          hours: '8 hrs/week',
          tasks: [
            {
              id: 'p3-w03-t1',
              type: 'build',
              text: 'Write unit tests with pytest. Aim for 70%+ coverage on core business logic. Write integration tests for your API endpoints using FastAPI\'s TestClient.',
              links: [
                { label: 'pytest docs', url: 'https://docs.pytest.org' },
                { label: 'FastAPI testing docs', url: 'https://fastapi.tiangolo.com/tutorial/testing/' },
              ],
              steps: [
                { id: 'p3-w03-t1-s1', text: 'Install: pip install pytest pytest-cov httpx. Create a tests/ directory and conftest.py with a client fixture: @pytest.fixture def client(): return TestClient(app).' },
                { id: 'p3-w03-t1-s2', text: 'Unit tests first: test business logic functions independently (validators, data transformations, error conditions). These run without HTTP overhead and are the fastest to iterate on.' },
                { id: 'p3-w03-t1-s3', text: 'Integration tests with TestClient: call POST /token, capture the token, then call a protected endpoint with it. Test the happy path and at least 2 error paths per endpoint.' },
                { id: 'p3-w03-t1-s4', text: 'Test database with a separate test DB: set DATABASE_URL to a test database in conftest.py, use a session-scoped fixture that runs migrations before tests and rolls back or drops everything after.' },
                { id: 'p3-w03-t1-s5', text: 'Run pytest --cov=app --cov-report=term-missing — identify uncovered lines and write tests for uncovered branches in your core business logic. Target 70%+ overall coverage.' },
              ],
            },
            {
              id: 'p3-w03-t2',
              type: 'build',
              text: 'GitHub Actions (docs.github.com/en/actions) CI/CD pipeline: lint with ruff (docs.astral.sh/ruff/), format check with black (black.readthedocs.io), run pytest, build Docker image, push to ECR and deploy on merge to main.',
              links: [
                { label: 'GitHub Actions docs', url: 'https://docs.github.com/en/actions' },
                { label: 'ruff', url: 'https://docs.astral.sh/ruff/' },
                { label: 'black', url: 'https://black.readthedocs.io' },
              ],
              steps: [
                { id: 'p3-w03-t2-s1', text: 'Create .github/workflows/ci.yml. On push to any branch: checkout repo, set up Python 3.12, pip install -r requirements.txt, run ruff check . (lint), black --check . (format), then pytest.' },
                { id: 'p3-w03-t2-s2', text: 'Add a deploy job that runs only on push to main: build Docker image, authenticate to ECR, push image, trigger a redeploy on App Runner or ECS. Deploy only after CI passes.' },
                { id: 'p3-w03-t2-s3', text: 'Store secrets in GitHub → Settings → Secrets: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, DATABASE_URL, SECRET_KEY. Reference them with ${{ secrets.SECRET_NAME }} in YAML.' },
                { id: 'p3-w03-t2-s4', text: 'Deliberately introduce a lint error, push, and verify the CI fails on the ruff step without reaching deploy. Fix the error and verify the pipeline goes green end to end.' },
                { id: 'p3-w03-t2-s5', text: 'Add a CI badge to your README: [![CI](https://github.com/{user}/{repo}/actions/workflows/ci.yml/badge.svg)](link) — this is the first signal of code quality a hiring manager sees.' },
              ],
            },
            {
              id: 'p3-w03-t3',
              type: 'build',
              text: 'Write a proper README: what the project does and why, architecture diagram, API endpoint reference, how to run locally, how to deploy. Write it for a stranger.',
              steps: [
                { id: 'p3-w03-t3-s1', text: 'Opening section: project name, one-sentence description, problem it solves, and a CI badge. A hiring manager decides in the first 5 seconds whether to keep reading.' },
                { id: 'p3-w03-t3-s2', text: 'Architecture section: include a diagram (even a simple ASCII diagram) showing the components — FastAPI, PostgreSQL/RDS, ECR/App Runner — and how they connect.' },
                { id: 'p3-w03-t3-s3', text: 'API reference: a table of endpoints with method, path, auth requirement, request body, and response schema. Copy from your /docs if needed.' },
                { id: 'p3-w03-t3-s4', text: 'Local development section: exact commands to clone, set up a venv, install dependencies, configure required env vars, run migrations, and start the server. Test these instructions in a new directory from scratch.' },
                { id: 'p3-w03-t3-s5', text: 'Final test: if a stranger found this repository right now, could they clone and run it in under 5 minutes using only the README? If no, fix what is missing.' },
              ],
            },
            {
              id: 'p3-w03-t4',
              type: 'practice',
              text: 'LeetCode: running total aim for 160 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w03-t4-s1', text: 'Maintain 5 problems this week. With the project wrapping up, schedule dedicated LeetCode time separately — it gets skipped if left to "whenever there is time."' },
                { id: 'p3-w03-t4-s2', text: 'Check your running total. Aim for 160 before TypeScript foundations week.' },
              ],
            },
          ],
          notes:
            'This project is now a portfolio piece. Polish it the way you would polish a work deliverable. A hiring manager clicks your GitHub link and forms an impression within 30 seconds.',
        },
        {
          id: 'p3-w04',
          title: 'Week 49–50: TypeScript foundations',
          hours: '8 hrs/week',
          tasks: [
            {
              id: 'p3-w04-t1',
              type: 'learn',
              text: 'TypeScript (typescriptlang.org/docs/): type annotations, interfaces, type aliases, generics, enums, utility types (Partial, Required, Pick, Omit, Record). If you know JavaScript, this is a 1-week ramp.',
              links: [
                { label: 'TypeScript docs', url: 'https://www.typescriptlang.org/docs/' },
                { label: 'TypeScript Playground', url: 'https://www.typescriptlang.org/play' },
              ],
              steps: [
                { id: 'p3-w04-t1-s1', text: 'Install: npm install -g typescript ts-node. Run tsc --init to generate tsconfig.json. Set strict: true and target: "ES2022". Run tsc to compile and observe how it catches errors before runtime.' },
                { id: 'p3-w04-t1-s2', text: 'Type annotations: let count: number = 0; function greet(name: string): string. Pass the wrong type and observe the compiler error. This is the core value proposition — errors before the code runs.' },
                { id: 'p3-w04-t1-s3', text: 'Interfaces vs type aliases: interface User { id: number; email: string } vs type User = { id: number; email: string }. Prefer interfaces for objects (they can be extended). Use type for unions and intersections.' },
                { id: 'p3-w04-t1-s4', text: 'Generics: function identity<T>(arg: T): T { return arg } — write a typed Stack<T> class with push, pop, and peek methods. Generics in TypeScript map directly to Python\'s Generic[T] from the typing module.' },
                { id: 'p3-w04-t1-s5', text: 'Utility types: Partial<User> (all optional), Required<User> (all required), Pick<User, "id" | "email"> (subset), Omit<User, "password"> (exclude). Use each in a function signature and verify the editor catches violations.' },
              ],
            },
            {
              id: 'p3-w04-t2',
              type: 'learn',
              text: 'Node.js runtime (nodejs.org), npm/yarn package management, CommonJS vs ES modules. Express.js (expressjs.com): build a basic REST API to compare the experience with FastAPI.',
              links: [
                { label: 'Node.js docs', url: 'https://nodejs.org/en/docs/' },
                { label: 'Express.js', url: 'https://expressjs.com' },
              ],
              steps: [
                { id: 'p3-w04-t2-s1', text: 'Install Node.js LTS from nodejs.org. Create a project: mkdir ts-api && cd ts-api && npm init -y && npm install express @types/express typescript ts-node nodemon — then add a tsconfig.json with strict: true.' },
                { id: 'p3-w04-t2-s2', text: 'Build the same API you built with FastAPI: GET /users, POST /users, GET /users/:id. Compare the verbosity — Express requires explicit middleware wiring where FastAPI is declarative.' },
                { id: 'p3-w04-t2-s3', text: 'Request/response typing: Request<{id: string}, {}, CreateUserBody> types path params, response, and body separately. Observe the difference from Python\'s Pydantic approach.' },
                { id: 'p3-w04-t2-s4', text: 'Middleware chain: app.use(express.json()), app.use(cors()), a custom error handler with (err, req, res, next) signature. Understand that Express middleware is the equivalent of FastAPI dependencies but more manual.' },
                { id: 'p3-w04-t2-s5', text: 'Write a comparison note: what FastAPI does automatically (validation, serialization, OpenAPI docs, async) versus what you wired manually in Express. Keep this — you will reference it in system design and behavioral interviews.' },
              ],
            },
            {
              id: 'p3-w04-t3',
              type: 'build',
              text: 'Rewrite a simple Python utility in TypeScript. Pay attention to where the type system catches errors your Python version would not.',
              steps: [
                { id: 'p3-w04-t3-s1', text: 'Pick a Python utility from Phase 1 or 2 — the config drift detector or the Graph API script are ideal. Choose something with clear input/output and at least one external call.' },
                { id: 'p3-w04-t3-s2', text: 'Define TypeScript interfaces for every data shape before writing any logic — Config, DriftFinding, AuditReport. This forces explicit type thinking in a way Python\'s duck typing does not require.' },
                { id: 'p3-w04-t3-s3', text: 'Translate function by function: Optional[str] → string | undefined, List[str] → string[], dict → Record<string, string>. Run tsc after each function and fix errors before moving on.' },
                { id: 'p3-w04-t3-s4', text: 'Note every place the TypeScript compiler caught an error your Python version would have missed at runtime. These are the concrete moments where the type system earns its complexity cost — mention them in interviews when asked about TypeScript tradeoffs.' },
              ],
            },
            {
              id: 'p3-w04-t4',
              type: 'practice',
              text: 'LeetCode: running total aim for 165 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w04-t4-s1', text: 'Solve 5 problems this week. With TypeScript as the primary focus, schedule LeetCode separately — 30 minutes in the morning before project work.' },
                { id: 'p3-w04-t4-s2', text: 'Verify running total at 165 before Project 2 kickoff.' },
              ],
            },
          ],
          notes:
            'Resources: TypeScript docs — typescriptlang.org/docs/ | Node.js — nodejs.org/en/docs/ | Express.js — expressjs.com | AWS CDK (TypeScript-first) — docs.aws.amazon.com/cdk/v2/guide/home.html — you likely have IaC exposure here already.',
        },
        {
          id: 'p3-w05',
          title: 'Week 51–53: Project 2 kickoff — LLM-powered tool',
          hours: '8 hrs/week',
          tasks: [
            {
              id: 'p3-w05-t1',
              type: 'learn',
              text: 'Anthropic API (docs.anthropic.com) or OpenAI API (platform.openai.com/docs): chat completions, system prompts, streaming responses, tool use / function calling, token counting and context management. Rate limiting and retry handling.',
              links: [
                { label: 'Anthropic API docs', url: 'https://docs.anthropic.com' },
                { label: 'OpenAI API docs', url: 'https://platform.openai.com/docs' },
              ],
              steps: [
                { id: 'p3-w05-t1-s1', text: 'Get an API key from console.anthropic.com or platform.openai.com. Install: pip install anthropic or pip install openai. Store the key as ANTHROPIC_API_KEY or OPENAI_API_KEY in env vars — never in code.' },
                { id: 'p3-w05-t1-s2', text: 'Send your first completion: client.messages.create(model="claude-opus-4-7", max_tokens=1024, messages=[{"role": "user", "content": "Hello"}]) — inspect the full response object structure before writing any abstraction around it.' },
                { id: 'p3-w05-t1-s3', text: 'System prompts: add system="You are a helpful assistant specializing in AWS infrastructure" as a parameter — this scopes the model\'s persona and response style for your application.' },
                { id: 'p3-w05-t1-s4', text: 'Streaming: use stream=True (Anthropic) or stream=True (OpenAI) and iterate the response to print tokens as they arrive — essential for any UI that needs to feel responsive rather than waiting for a full completion.' },
                { id: 'p3-w05-t1-s5', text: 'Tool use / function calling: define a tool schema (name, description, input_schema) and handle the model returning a tool_use block — implement the tool locally, send the result back, get the final response. This is the core agentic pattern.' },
                { id: 'p3-w05-t1-s6', text: 'Rate limiting: catch anthropic.RateLimitError and implement exponential backoff (1s, 2s, 4s). Track usage.input_tokens + usage.output_tokens per call — LLM API costs scale with volume and context size.' },
              ],
            },
            {
              id: 'p3-w05-t2',
              type: 'build',
              text: 'Design a project that uses an LLM for something genuinely useful given your background: M365 configuration explainer, AWS cost anomaly summarizer, IaC drift analyzer with natural language output, or PowerShell-to-Python migration assistant.',
              steps: [
                { id: 'p3-w05-t2-s1', text: 'Choose a project that uses LLM for something your current role would genuinely benefit from: M365 configuration explainer ("what does this Conditional Access policy actually do in plain English?"), AWS cost anomaly summarizer, or IaC drift report with natural language output.' },
                { id: 'p3-w05-t2-s2', text: 'Write a design doc: what is the input (raw JSON config, CloudWatch data, Terraform plan output)? What is the system prompt? What does the LLM return? What does your code do with the response before surfacing it?' },
                { id: 'p3-w05-t2-s3', text: 'Define the data flow: input source → preprocessing → LLM call → response parsing → output format (CLI, JSON, REST API response, or frontend). Sketch it before writing any code.' },
                { id: 'p3-w05-t2-s4', text: 'Identify specifically what the LLM adds. If you could get the same result with a regex or rule-based system, do not use an LLM — explain in your README what natural language understanding the model provides that a rule-based system cannot.' },
              ],
            },
            {
              id: 'p3-w05-t3',
              type: 'build',
              text: 'Build the core LLM integration. Handle rate limits, API errors, token limits, and streaming. Store conversation history if relevant.',
              steps: [
                { id: 'p3-w05-t3-s1', text: 'Start with the simplest version: one function that takes an input string, calls the API, and returns the model response. Resist adding complexity until this baseline works end to end.' },
                { id: 'p3-w05-t3-s2', text: 'Rate limit handling: wrap every API call in try/except and implement exponential backoff — this is not optional, as rate limits will be hit repeatedly during development.' },
                { id: 'p3-w05-t3-s3', text: 'Token limit management: if inputs might be large (long config files, big JSON blobs), truncate or summarize them before sending. Log usage.input_tokens per call — cost visibility matters at scale.' },
                { id: 'p3-w05-t3-s4', text: 'Graceful degradation: if the LLM API is unavailable, your application should return raw data without the natural language summary rather than crashing. A useful degraded response beats an unhelpful error.' },
                { id: 'p3-w05-t3-s5', text: 'If building a conversational feature: store history as a list of messages and cap it at N turns or M total tokens to prevent context overflow and runaway costs.' },
              ],
            },
            {
              id: 'p3-w05-t4',
              type: 'amazon',
              text: 'Identify SDE-adjacent roles at Amazon internally: Systems Development Engineer, Software Development Engineer (Tooling), Platform Engineer. These are valid stepping stones that often lead to SDE transfers within 12–18 months.',
              steps: [
                { id: 'p3-w05-t4-s1', text: 'Search Amazon\'s internal job board (A to Z → Jobs) for "Systems Development Engineer," "Software Development Engineer," and "Platform Engineer." Filter by teams adjacent to yours or in AWS-related orgs.' },
                { id: 'p3-w05-t4-s2', text: 'Identify 3–5 roles where your infrastructure and AWS expertise maps directly to what they build. Read the JDs carefully and note which qualifications you already have vs. still need.' },
                { id: 'p3-w05-t4-s3', text: 'For each target role: find the hiring manager on LinkedIn or via the org chart and check if you have any mutual connections. A warm introduction dramatically improves response rate.' },
                { id: 'p3-w05-t4-s4', text: 'Note the SDE-adjacent path: Systems Development Engineer (SDE-I equivalent) or Platform Engineer often leads to an SDE transfer within 12–18 months. Don\'t discount these titles if the work is real software development.' },
              ],
            },
            {
              id: 'p3-w05-t5',
              type: 'practice',
              text: 'LeetCode: running total aim for 170 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w05-t5-s1', text: 'Maintain 5 problems this week despite the LLM project. Schedule it as a fixed time block — it gets skipped if left to "whenever there is time."' },
                { id: 'p3-w05-t5-s2', text: 'Verify running total at 170 before Project 2 completion week.' },
              ],
            },
          ],
          notes:
            'LLM integration is table stakes for SDE candidates in 2026. A project that uses AI thoughtfully — not just as a gimmick — signals that you are current and building relevant skills.',
        },
        {
          id: 'p3-w06',
          title: 'Week 54–56: Project 2 — complete, deploy, and document',
          hours: '8 hrs/week',
          tasks: [
            {
              id: 'p3-w06-t1',
              type: 'build',
              text: 'Complete Project 2: full functionality, proper error handling, graceful degradation when the LLM API is unavailable.',
              steps: [
                { id: 'p3-w06-t1-s1', text: 'Audit current state: list every planned feature and mark each as done, in-progress, or cut. Make deliberate scope decisions — a smaller finished project beats a larger abandoned one.' },
                { id: 'p3-w06-t1-s2', text: 'Complete core functionality first. "Core" means: the primary use case a hiring manager would demo to evaluate the project. Edge cases and nice-to-haves come after the core is working.' },
                { id: 'p3-w06-t1-s3', text: 'Error handling audit: every external call (LLM API, database, filesystem) must be wrapped in try/except. Every error must produce a useful log message, not a raw stack trace.' },
                { id: 'p3-w06-t1-s4', text: 'Graceful degradation test: artificially disable the LLM API (use a wrong key), confirm your application handles it without crashing and returns a meaningful response to the caller.' },
              ],
            },
            {
              id: 'p3-w06-t2',
              type: 'build',
              text: 'Deploy it. Tests. CI/CD pipeline. README written for a stranger. Same standard as Project 1.',
              steps: [
                { id: 'p3-w06-t2-s1', text: 'Tests: unit tests for all core business logic, integration tests for the primary user flow. If the project calls an LLM API in tests, mock it — tests must not make real API calls or incur real costs.' },
                { id: 'p3-w06-t2-s2', text: 'CI/CD pipeline: copy the GitHub Actions structure from Project 1. Add ANTHROPIC_API_KEY or OPENAI_API_KEY as a secret. Verify the mocked tests pass in the CI environment.' },
                { id: 'p3-w06-t2-s3', text: 'Deploy: containerize and push to ECR, deploy on App Runner or ECS. Verify the deployed version works end to end against the real LLM API with a live smoke test.' },
                { id: 'p3-w06-t2-s4', text: 'README: one-sentence description, problem statement, architecture diagram, local setup instructions, deployed URL. A hiring manager should be able to try the project without running it locally.' },
              ],
            },
            {
              id: 'p3-w06-t3',
              type: 'build',
              text: 'Optional: add a React or plain HTML frontend if it adds value to the project. A functional UI is enough — you do not need to be a frontend engineer.',
              steps: [
                { id: 'p3-w06-t3-s1', text: 'Evaluate first: does a UI make the project demonstrably better, or would a well-designed CLI or API be more impressive? A polished CLI is often more appropriate than a mediocre React frontend.' },
                { id: 'p3-w06-t3-s2', text: 'If adding a frontend: use Vite + React or plain HTML/JS — build a minimal interface (input form + result display). Do not invest heavily in design; it does not matter for a portfolio project evaluated by engineers.' },
                { id: 'p3-w06-t3-s3', text: 'CORS: add CORSMiddleware to FastAPI with allow_origins pointing to your frontend URL. Without this, the browser will block cross-origin API calls.' },
                { id: 'p3-w06-t3-s4', text: 'Deploy the frontend to S3 + CloudFront, Netlify, or Vercel. Include the live URL prominently in your README — it is the clearest signal that the project is real and working.' },
              ],
            },
            {
              id: 'p3-w06-t4',
              type: 'practice',
              text: 'LeetCode: running total aim for 175 problems. Revisit any topic areas where you are consistently getting stuck.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w06-t4-s1', text: 'Maintain 5 problems this week. Revisit any topic where you are still getting stuck — graph traversals, 2D DP, or sliding window are the most common gaps at this stage.' },
                { id: 'p3-w06-t4-s2', text: 'Verify running total at 175. You now have 2 deployed, documented projects and are entering system design weeks — LeetCode consistency signals discipline that hiring managers value.' },
              ],
            },
          ],
          notes:
            'You now have 2 deployed, tested, documented projects on GitHub. Their domain relevance to infrastructure and cloud tooling makes them stand out further.',
        },
        {
          id: 'p3-w07',
          title: 'Week 57–58: Java fundamentals',
          hours: '8 hrs/week',
          tasks: [
            {
              id: 'p3-w07-t1',
              type: 'learn',
              text: 'Java syntax from Python: static typing, class-based structure, interfaces, generics, access modifiers. Spring Boot basics — build a hello world REST API and compare the experience to FastAPI.',
              links: [
                { label: 'Spring Boot docs', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
                { label: 'Spring Initializr', url: 'https://start.spring.io' },
              ],
              steps: [
                { id: 'p3-w07-t1-s1', text: 'Install Java 21 LTS from adoptium.net and Maven from maven.apache.org. Verify with java --version and mvn --version.' },
                { id: 'p3-w07-t1-s2', text: 'Generate a Spring Boot project at start.spring.io: Java 21, Maven, add Spring Web and Spring Boot DevTools. Download, unzip, open in IntelliJ IDEA (free community edition) or VS Code with the Java Extension Pack.' },
                { id: 'p3-w07-t1-s3', text: 'Core syntax differences from Python: static typing is mandatory (every variable and method has a declared type), braces define blocks (no indentation rules), every method must be inside a class, void means no return value.' },
                { id: 'p3-w07-t1-s4', text: 'Add a REST endpoint: @RestController → @GetMapping("/users") → public List<String> getUsers() — notice annotations, explicit return types, and JSON serialization handled automatically by Jackson.' },
                { id: 'p3-w07-t1-s5', text: 'Compare to FastAPI: @app.get("/users") + return type annotation (Python) vs @GetMapping("/users") + return type declaration (Java). Identical concept, more explicit syntax. The Spring ecosystem is larger and more opinionated than FastAPI.' },
              ],
            },
            {
              id: 'p3-w07-t2',
              type: 'learn',
              text: 'Maven or Gradle build tools. Java Collections framework: List, Map, Set, Queue, Deque — map each to its Python equivalent and understand performance characteristics.',
              links: [
                { label: 'Maven getting started', url: 'https://maven.apache.org/guides/getting-started/' },
                { label: 'Java Collections docs', url: 'https://docs.oracle.com/en/java/docs/java-collections-framework.html' },
              ],
              steps: [
                { id: 'p3-w07-t2-s1', text: 'Maven: pom.xml is your package manager config (like requirements.txt + setup.py combined). Run mvn clean install to compile and test, mvn spring-boot:run to start your app.' },
                { id: 'p3-w07-t2-s2', text: 'Java equivalents for Python collections: List<T> (ArrayList) = Python list, Map<K,V> (HashMap) = dict, Set<T> (HashSet) = set, Deque<T> (ArrayDeque) = Python deque. The concepts are identical; the syntax is more verbose.' },
                { id: 'p3-w07-t2-s3', text: 'Performance: ArrayList O(1) get/O(n) insert (same as Python list). LinkedList O(1) insert at head/tail/O(n) get. HashMap O(1) average (same as dict). TreeMap O(log n) but sorted — use it when you need order.' },
                { id: 'p3-w07-t2-s4', text: 'Streams API: list.stream().filter(u -> u.isActive()).map(User::getName).collect(Collectors.toList()) — Java\'s functional-style processing is equivalent to Python list comprehensions. Practice translating between both.' },
              ],
            },
            {
              id: 'p3-w07-t3',
              type: 'practice',
              text: 'Redo 10 LeetCode problems you already know well — in Java. The goal is syntax comfort under pressure, not problem-solving. Arrays, strings, and hash maps first.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w07-t3-s1', text: 'Switch LeetCode language to Java. Start with Two Sum — your goal is not to re-derive the algorithm but to write clean Java syntax correctly with no time pressure.' },
                { id: 'p3-w07-t3-s2', text: 'Target problems you have already solved in Python: Two Sum, Valid Parentheses, Reverse String, Contains Duplicate, Maximum Subarray, Climbing Stairs, Merge Two Sorted Lists, Best Time to Buy Stock, Number of Islands, Product Except Self.' },
                { id: 'p3-w07-t3-s3', text: 'Key Java syntax to internalize: int[] vs Integer[] (primitives vs boxed types), Arrays.sort() vs Collections.sort(), HashMap<Integer,Integer> get/put, and String comparison with .equals() not == in Java.' },
                { id: 'p3-w07-t3-s4', text: 'Aim for syntax fluency. If you can write a clean Java solution for a problem you already know, you will handle Java in an interview without the cognitive overhead of learning the language under pressure.' },
              ],
            },
            {
              id: 'p3-w07-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 180 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w07-t4-s1', text: 'The 10 Java redos count toward your total. Verify running total at 180+ before moving to system design weeks.' },
                { id: 'p3-w07-t4-s2', text: 'If behind: prioritize Java redos first (fast since you know the algorithms) plus 5 new Mediums to close the gap.' },
              ],
            },
          ],
          notes:
            'Java is optional if targeting only external non-Amazon roles. It is close to essential if targeting an internal Amazon SDE transfer, as Amazon\'s internal codebase is heavily Java.',
        },
        {
          id: 'p3-w08',
          title: 'Week 59–64: System design foundations',
          hours: '8 hrs/week',
          tasks: [
            {
              id: 'p3-w08-t1',
              type: 'learn',
              text: 'Weeks 59–60: Core concepts — horizontal vs vertical scaling, availability vs consistency (CAP theorem), SQL vs NoSQL tradeoffs, caching strategies (Redis, CDN), load balancing, stateless vs stateful services.',
              links: [
                { label: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
                { label: 'CAP theorem explained', url: 'https://en.wikipedia.org/wiki/CAP_theorem' },
              ],
              steps: [
                { id: 'p3-w08-t1-s1', text: 'Horizontal vs vertical scaling: vertical = bigger machine (more CPU/RAM), horizontal = more machines. Horizontal requires stateless services — this is why JWT is preferred over server-side sessions at scale.' },
                { id: 'p3-w08-t1-s2', text: 'CAP theorem: Consistency (all reads return the latest write), Availability (all requests get a response), Partition Tolerance (works despite network failures). P is non-negotiable in distributed systems, so you choose between C and A.' },
                { id: 'p3-w08-t1-s3', text: 'SQL vs NoSQL: SQL gives ACID transactions and relational integrity at the cost of horizontal scale difficulty. NoSQL gives easy horizontal scaling and flexible schemas at the cost of consistency guarantees. Know when each is appropriate.' },
                { id: 'p3-w08-t1-s4', text: 'Caching strategies: cache-aside (app checks cache, falls back to DB on miss), write-through (write to cache + DB simultaneously), write-behind (write cache first, DB async). Redis for sub-millisecond key lookups; CDN for static assets.' },
                { id: 'p3-w08-t1-s5', text: 'Load balancing: round-robin (even distribution), least-connections (routes to least busy), consistent hashing (minimizes cache invalidation when nodes join/leave). Know the tradeoffs — consistent hashing is the most commonly asked about in interviews.' },
              ],
            },
            {
              id: 'p3-w08-t2',
              type: 'learn',
              text: 'Weeks 61–62: Study real system designs using Grokking System Design. Work through: URL shortener, pastebin, rate limiter, key-value store, web crawler. Requirements → capacity estimation → high-level design → component deep dive → bottlenecks.',
              links: [
                { label: 'Grokking System Design', url: 'https://www.designgurus.io/course/grokking-the-system-design-interview' },
                { label: 'ByteByteGo newsletter', url: 'https://blog.bytebytego.com' },
                { label: 'Redis docs', url: 'https://redis.io/docs/' },
              ],
              steps: [
                { id: 'p3-w08-t2-s1', text: 'Use this 5-step framework for every design: (1) clarify functional requirements, (2) define non-functional requirements + scale, (3) draw high-level diagram, (4) deep dive on 1–2 bottleneck components, (5) state tradeoffs explicitly.' },
                { id: 'p3-w08-t2-s2', text: 'URL shortener: hash function + collision handling + database schema (short_code → long_url + metadata). How do you scale the redirect lookup to sub-10ms for 100M daily requests?' },
                { id: 'p3-w08-t2-s3', text: 'Rate limiter: leaky bucket vs token bucket vs sliding window counter. Where does it live (API gateway vs application layer)? How does it work across multiple service instances without a central bottleneck?' },
                { id: 'p3-w08-t2-s4', text: 'Key-value store: consistent hashing for sharding, replication factor for durability, leader election for consistency. This covers the same ground as DynamoDB internals — your AWS background gives you a head start.' },
                { id: 'p3-w08-t2-s5', text: 'Web crawler: BFS URL frontier, politeness (rate limiting per domain, robots.txt), deduplication with Bloom filters. Your AWS knowledge maps directly: S3 for crawled content storage, SQS for the URL queue.' },
              ],
            },
            {
              id: 'p3-w08-t3',
              type: 'learn',
              text: 'Weeks 63–64: Event-driven architecture, microservices vs monolith tradeoffs, message queues (SQS vs SNS vs Kafka), API gateway patterns, database sharding, replication, and read replicas.',
              links: [
                { label: 'AWS SQS docs', url: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html' },
                { label: 'Martin Fowler microservices guide', url: 'https://martinfowler.com/articles/microservices.html' },
              ],
              steps: [
                { id: 'p3-w08-t3-s1', text: 'Monolith vs microservices: start with a monolith and split when a clear boundary emerges (different scaling needs, different release cadences, separate team ownership). Microservices-first is premature optimization for most projects.' },
                { id: 'p3-w08-t3-s2', text: 'Message queues: SQS for point-to-point (one consumer per message), SNS for pub/sub fan-out (many subscribers), Kafka for high-throughput ordered streams with replay capability. Know when each pattern is appropriate.' },
                { id: 'p3-w08-t3-s3', text: 'API gateway pattern: single entry point handles auth, rate limiting, and routing before requests reach backend services. Decouples clients from internal service topology — clients don\'t need to know which service handles which endpoint.' },
                { id: 'p3-w08-t3-s4', text: 'Database sharding: partition data across multiple DB instances by key (user_id % N). Challenge: cross-shard queries are expensive, joins across shards are nearly impossible. Read replicas handle read scale without this complexity.' },
                { id: 'p3-w08-t3-s5', text: 'Your AWS experience is directly relevant: you know SQS, SNS, and API Gateway operationally. The interview requires you to explain why you would choose each — translate operational knowledge into design reasoning with tradeoffs.' },
              ],
            },
            {
              id: 'p3-w08-t4',
              type: 'amazon',
              text: 'Scope your Amazon internal application. Identify a specific team and hiring manager. Check if anyone in your network can make an introduction. Internal referrals carry weight.',
              steps: [
                { id: 'p3-w08-t4-s1', text: 'Search the internal job board for SDE and Systems Development Engineer roles. Identify 2–3 specific teams where your AWS and infrastructure expertise maps directly to what they build.' },
                { id: 'p3-w08-t4-s2', text: 'Find the hiring manager for your top target role via LinkedIn or the org chart. A direct message from a current Amazon employee gets read — cold external applications often do not.' },
                { id: 'p3-w08-t4-s3', text: 'Check your referral network: who in your immediate circle is an SDE at Amazon? A referral from a Level 6+ SDE carries meaningful weight. Ask directly — most people will help if you make it easy for them.' },
                { id: 'p3-w08-t4-s4', text: 'Plan your timeline: Phase 4 is interview prep (Weeks 65–80). If you apply at the start of Phase 5, materials need to be ready by end of Phase 4. Work backward and identify what is still missing.' },
              ],
            },
            {
              id: 'p3-w08-t5',
              type: 'practice',
              text: 'LeetCode: running total aim for 185 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p3-w08-t5-s1', text: 'Maintain 5 problems per week across all 6 system design weeks. System design study is cognitively different from coding — you can do both in the same week without one crowding out the other.' },
                { id: 'p3-w08-t5-s2', text: 'Verify running total at 185+ before Phase 4 interview prep.' },
              ],
            },
          ],
          notes:
            'Resources: Grokking System Design — designgurus.io (worth the subscription for this phase) | Alex Xu\'s System Design Interview Vol. 1 & 2 — ISBN 979-8664653403 | ByteByteGo newsletter (free) — blog.bytebytego.com | Redis docs — redis.io/docs/ | Your AWS background is a genuine competitive advantage here — you need the vocabulary, not the underlying concepts.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PHASE 4 — Interview Preparation (Weeks 65–80, 28 tasks)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'phase-4',
      number: 4,
      title: 'Interview Preparation',
      duration: 'Months 17–20',
      length: '16 weeks',
      hoursPerWeek: '~10 hrs/week',
      goal:
        'Amazon\'s interview process is a known quantity. Prepare for it systematically. Your 20 years of Leadership Principle material is an advantage most SDE candidates do not have — use it.',
      checkpoint:
        'Have you completed 5 or more full mock interviews across coding, system design, and behavioral, and received external feedback on each? If yes, start applying. If not, complete the mocks before submitting applications.',
      weeks: [
        {
          id: 'p4-w01',
          title: 'Week 65–66: Amazon OA simulation and timed LeetCode',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p4-w01-t1',
              type: 'practice',
              text: 'LeetCode: push to 200 problems. Focus specifically on Amazon-tagged questions. Use Neetcode\'s Amazon list if you do not have LeetCode Premium.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
                { label: 'Neetcode Amazon list', url: 'https://neetcode.io/practice' },
              ],
              steps: [
                { id: 'p4-w01-t1-s1', text: 'On LeetCode, filter by the "Amazon" tag. Work through the top 50 most frequently asked Amazon problems — you will recognize most patterns, but some will be new framings of familiar concepts.' },
                { id: 'p4-w01-t1-s2', text: 'Neetcode.io → Practice → Amazon: use this list if you do not have LeetCode Premium. Neetcode\'s explanations are among the clearest available — watch the video only after you have attempted the problem yourself.' },
                { id: 'p4-w01-t1-s3', text: 'For each Amazon-tagged problem: note whether it is OA-style (direct pattern application, solvable in 20–30 minutes) or loop-style (requires deeper insight, 30–45 minutes). Calibrate your time expectations accordingly.' },
                { id: 'p4-w01-t1-s4', text: 'Verify running total at 200. Depth matters more than count — 200 well-understood problems beats 300 where you copied solutions.' },
              ],
            },
            {
              id: 'p4-w01-t2',
              type: 'practice',
              text: 'Simulate timed OA conditions: 2 problems, 90 minutes, no hints, no looking anything up. Do this at least 3 times across these two weeks. Treat each simulation as a real exam.',
              steps: [
                { id: 'p4-w01-t2-s1', text: 'Set a 90-minute timer. Open LeetCode in a clean browser tab. Pick 2 problems you have not seen before at Medium difficulty. No hints, no external tabs, no looking anything up. Submit both before time expires.' },
                { id: 'p4-w01-t2-s2', text: 'If you did not solve both in time: identify exactly where you got stuck — was it the algorithm? The implementation? Edge cases? Time pressure causing panic? Each failure mode has a different fix.' },
                { id: 'p4-w01-t2-s3', text: 'Repeat at least 3 times across these 2 weeks. The goal is consistent performance under time pressure, not one perfect run.' },
                { id: 'p4-w01-t2-s4', text: 'After each simulation: write a short debrief — what did you solve cleanly? What took too long? What did you not finish? This list becomes your study guide for p4-w05 weakness remediation.' },
              ],
            },
            {
              id: 'p4-w01-t3',
              type: 'learn',
              text: 'Review Amazon\'s OA format: 2 coding problems plus work simulation questions. Understand what the work simulation assesses — it evaluates Leadership Principles through scenario questions, not coding ability.',
              links: [
                { label: 'Amazon hiring process', url: 'https://www.amazon.jobs/en/landing_pages/interviewing-at-amazon' },
              ],
              steps: [
                { id: 'p4-w01-t3-s1', text: 'OA structure: typically 2 coding problems (90 minutes) + a work simulation section. You need both coding problems solved cleanly to advance — partial solutions rarely pass the hidden test cases.' },
                { id: 'p4-w01-t3-s2', text: 'Work simulation: scenario-based multiple choice evaluating Leadership Principles through workplace situations. There are no trick questions — choose the answer that reflects the most customer-centric, ownership-oriented response.' },
                { id: 'p4-w01-t3-s3', text: 'OA platform: likely HackerRank or CodeSignal. You cannot access external resources. All test cases must pass — "mostly correct" fails.' },
                { id: 'p4-w01-t3-s4', text: 'Read recent reports on Blind or Reddit/r/cscareerquestions for current problem types. Amazon rotates OA problems periodically — what appeared 3 months ago may differ from what appears now.' },
              ],
            },
            {
              id: 'p4-w01-t4',
              type: 'amazon',
              text: 'Review all 16 Amazon Leadership Principles. For each one, write down 2–3 experiences from your career that could illustrate it. You are not drafting full STAR stories yet — just capturing raw material.',
              links: [
                { label: 'Amazon Leadership Principles', url: 'https://www.amazon.jobs/en/principles' },
              ],
              steps: [
                { id: 'p4-w01-t4-s1', text: 'Open amazon.jobs/principles and read each LP carefully. For each one, spend 5 minutes listing 2–3 career experiences that illustrate it. No filtering — just get everything on paper.' },
                { id: 'p4-w01-t4-s2', text: 'Priority LPs for SDE interviews: Customer Obsession, Ownership, Invent and Simplify, Dive Deep, Deliver Results, Bias for Action. Ensure you have at least 3 experiences listed for each of these.' },
                { id: 'p4-w01-t4-s3', text: 'For each experience: jot down an approximate quantifiable result (hours saved, cost reduced, incidents prevented, users impacted). Even rough numbers are better than "improved significantly."' },
                { id: 'p4-w01-t4-s4', text: 'Flag the 3–5 strongest experiences overall — these are the stories flexible enough to address multiple LPs depending on which angle the interviewer probes. You will develop these in Week 69–70.' },
              ],
            },
          ],
          notes:
            'Amazon\'s OA is pass/fail. The coding section typically consists of 2 Medium problems. You need to solve both cleanly to advance. There is no partial credit for half-working solutions.',
        },
        {
          id: 'p4-w02',
          title: 'Week 67–68: System design structured practice',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p4-w02-t1',
              type: 'learn',
              text: 'Learn and internalize a system design interview framework: clarify functional and non-functional requirements → estimate scale → draw high-level architecture → deep dive on 1–2 components → identify bottlenecks and tradeoffs. Practice saying this structure out loud.',
              links: [
                { label: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
              ],
              steps: [
                { id: 'p4-w02-t1-s1', text: 'Memorize and recite this 5-step framework: (1) clarify functional and non-functional requirements before drawing anything, (2) back-of-envelope scale estimate (DAU × requests/day), (3) high-level architecture diagram, (4) deep dive on 1–2 components, (5) bottlenecks and explicit tradeoffs.' },
                { id: 'p4-w02-t1-s2', text: 'Requirements practice: for "design Twitter," ask: How many users? Read-heavy or write-heavy? Real-time? Global or regional? Media content? DMs? These questions signal senior engineering thinking before you draw a single box.' },
                { id: 'p4-w02-t1-s3', text: 'Scale estimation: 100M DAU × 10 reads/day = 1B reads/day ≈ 12K reads/second. Know that 1B/day ≈ 12K/second and 1M/day ≈ 12/second. Practice back-of-envelope math until it feels natural — candidates who skip it lose points.' },
                { id: 'p4-w02-t1-s4', text: 'Tradeoff language: practice sentences like "I chose Cassandra over PostgreSQL here because write volume at this scale would exhaust connection pools — the tradeoff is we lose ACID transactions, which is acceptable because...".' },
              ],
            },
            {
              id: 'p4-w02-t2',
              type: 'practice',
              text: 'Design out loud: Twitter feed, Dropbox/Google Drive, a notification system, a ride-sharing backend, Amazon\'s own product recommendation system. Record yourself. Watch it back. The delivery matters as much as the content.',
              steps: [
                { id: 'p4-w02-t2-s1', text: 'Record yourself (voice or video) designing each system. Hearing yourself reveals filler words, long silences, jumping to solutions before requirements, and forgetting to state tradeoffs — none of which you notice while speaking.' },
                { id: 'p4-w02-t2-s2', text: 'Twitter feed: focus on the fan-out problem — when a celebrity with 10M followers tweets, how do you update 10M feeds? Push model vs pull model vs hybrid. Know the follower threshold (~1M) where you switch strategies.' },
                { id: 'p4-w02-t2-s3', text: 'Dropbox/Google Drive: file chunking and deduplication with content hashing, sync conflict resolution, versioning. Your S3 knowledge is relevant — but explain design choices, not just AWS services.' },
                { id: 'p4-w02-t2-s4', text: 'Notification system: multi-channel delivery (push/email/SMS), at-least-once delivery guarantees, per-user rate limiting. SQS + SNS patterns from your AWS background map directly here.' },
                { id: 'p4-w02-t2-s5', text: 'Grade each recording: requirements gathered first? Scale estimated? At least 2 tradeoffs stated explicitly? Bottlenecks identified? Communication clear without excessive filler? Redo any session that misses 2 or more criteria.' },
              ],
            },
            {
              id: 'p4-w02-t3',
              type: 'build',
              text: 'Write up 2 complete system designs: architecture diagram + component descriptions + tradeoff analysis. Put them in a GitHub repo or private document you can reference before interviews.',
              steps: [
                { id: 'p4-w02-t3-s1', text: 'Choose the 2 designs where you feel least confident from your out-loud practice sessions. Writing forces precision that speaking allows you to hand-wave past.' },
                { id: 'p4-w02-t3-s2', text: 'Format for each write-up: functional + non-functional requirements, capacity estimates, architecture diagram, component descriptions (1 paragraph each), bottlenecks and how you address them, alternatives you considered and why you rejected them.' },
                { id: 'p4-w02-t3-s3', text: 'Create a GitHub repo named "system-design-notes" and push both write-ups. Version control means you can refine them over time; the repo is also shareable evidence of preparation.' },
                { id: 'p4-w02-t3-s4', text: 'Re-read your write-ups 30 minutes before each mock interview as a warm-up. Re-reading your own notes is more effective than cramming new material immediately before a session.' },
              ],
            },
            {
              id: 'p4-w02-t4',
              type: 'practice',
              text: 'LeetCode: maintain 5 problems per week. Running total: 210.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p4-w02-t4-s1', text: 'Maintain 5 problems this week. At this stage, LeetCode should feel routine — the goal is staying sharp, not learning new patterns.' },
                { id: 'p4-w02-t4-s2', text: 'Verify running total at 210 before LP story writing week.' },
              ],
            },
          ],
          notes:
            'System design is a conversation, not a presentation. Practice thinking out loud, asking clarifying questions, and incorporating feedback mid-design.',
        },
        {
          id: 'p4-w03',
          title: 'Week 69–70: Leadership Principles — all 16 STAR stories',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p4-w03-t1',
              type: 'amazon',
              text: 'Write a complete STAR story for each of Amazon\'s 16 Leadership Principles. Situation (brief), Task (your responsibility), Action (what YOU specifically did — not the team), Result (quantified where possible). Aim for 2–3 minutes spoken per story.',
              links: [
                { label: 'Amazon Leadership Principles', url: 'https://www.amazon.jobs/en/principles' },
              ],
              steps: [
                { id: 'p4-w03-t1-s1', text: 'Open amazon.jobs/principles. For each LP, select the strongest experience from the raw material you captured in p4-w01-t4.' },
                { id: 'p4-w03-t1-s2', text: 'STAR structure: Situation (2 sentences max), Task (1 sentence — your specific responsibility), Action (4–6 sentences — exactly what YOU did step by step, not the team), Result (1–2 sentences with numbers).' },
                { id: 'p4-w03-t1-s3', text: 'Action section audit: every sentence must start with "I" not "We." "We decided" → "I proposed and secured buy-in." "The team built" → "I designed and led the implementation." This is the most common behavioral mistake.' },
                { id: 'p4-w03-t1-s4', text: 'Results audit: "improved performance" → "reduced latency from 3s to 400ms." "Saved time" → "automated a 4-hour manual process, saving 16 engineer-hours per week." If you lack exact numbers, use ranges: "reduced by 60–70%."' },
              ],
            },
            {
              id: 'p4-w03-t2',
              type: 'amazon',
              text: 'Priority LPs for SDE interviews: Customer Obsession, Ownership, Invent and Simplify, Dive Deep, Deliver Results, Bias for Action. Have 2 stories ready for each of these.',
              steps: [
                { id: 'p4-w03-t2-s1', text: 'For each of the 6 priority LPs, write a second STAR story using a different context than your first (one operational + one project-based; or one individual + one leadership). Two stories means you are never scrambling when an interviewer asks a follow-up.' },
                { id: 'p4-w03-t2-s2', text: 'Story variety check: your two stories for each LP should come from different contexts. Interviewers notice and penalize when all your stories are from the same project or time period.' },
                { id: 'p4-w03-t2-s3', text: 'Deliver each of the 12 priority stories out loud twice before the mock interviews in Week 71–72. The goal is internalizing the key beats — not memorization. You need to recover smoothly if the interviewer interrupts mid-story.' },
              ],
            },
            {
              id: 'p4-w03-t3',
              type: 'amazon',
              text: 'Identify 3 stories flexible enough to cover multiple LPs. Interviewers often probe the same story from different angles — "tell me about a time you showed ownership" can pivot to Insist on the Highest Standards.',
              steps: [
                { id: 'p4-w03-t3-s1', text: 'Identify 3–5 career stories where you displayed multiple LPs simultaneously — a major incident response, a process you redesigned end-to-end, a system you built and owned. These are your most flexible STAR stories.' },
                { id: 'p4-w03-t3-s2', text: 'For each flexible story, map which LPs it covers and identify the entry point for each (which part of the STAR do you lead with for Ownership vs Deliver Results vs Bias for Action).' },
                { id: 'p4-w03-t3-s3', text: 'Practice pivoting: have someone ask "tell me about Ownership" — answer with the flexible story, then have them ask "now show me Deliver Results in the same situation." Practice pivoting the narrative without starting over.' },
              ],
            },
            {
              id: 'p4-w03-t4',
              type: 'practice',
              text: 'Deliver every story out loud. Time yourself. 2–3 minutes is the target. Under 90 seconds is too thin. Over 4 minutes loses the interviewer.',
              steps: [
                { id: 'p4-w03-t4-s1', text: 'Record yourself delivering 5 of your strongest stories end to end. Do not stop and restart — simulate real interview pressure. The stumbles you recover from are informative; the stumbles you reset from are not.' },
                { id: 'p4-w03-t4-s2', text: 'Audit each recording on 4 criteria: (1) Under 3 minutes? (2) Every action sentence starts with "I"? (3) Result is quantified or range-bounded? (4) No Situation rambling? Redo any story that fails 2 or more.' },
                { id: 'p4-w03-t4-s3', text: 'Get external feedback: share recordings with a trusted colleague who will be honest. Ask specifically: "Did I say \'we\' instead of \'I\'?" and "Was the result specific and believable?" Kind feedback is useless at this stage.' },
              ],
            },
          ],
          notes:
            'Behavioral is where strong technical candidates lose Amazon loops. Your 20 years of infrastructure work gives you richer STAR material than most SDE candidates. Do not underinvest here.',
        },
        {
          id: 'p4-w04',
          title: 'Week 71–72: First mock interview round',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p4-w04-t1',
              type: 'practice',
              text: 'Complete 2 full mock coding interviews via Pramp (pramp.com) or Interviewing.io (interviewing.io). Get external feedback — not from people who know you and will be kind. You need honest assessment.',
              links: [
                { label: 'Pramp', url: 'https://www.pramp.com' },
                { label: 'Interviewing.io', url: 'https://interviewing.io' },
              ],
              steps: [
                { id: 'p4-w04-t1-s1', text: 'Book 2 Pramp sessions in advance — the scheduling commitment prevents cancellation, which simulates the real pressure of a scheduled interview.' },
                { id: 'p4-w04-t1-s2', text: 'During each session: think out loud, verbalize your approach before coding, state time and space complexity before submitting, ask clarifying questions before starting. These habits only form through repeated practice under observation.' },
                { id: 'p4-w04-t1-s3', text: 'After each session: read the peer feedback carefully. Feedback from a stranger who does not know you is 10× more useful than encouragement from someone who does.' },
                { id: 'p4-w04-t1-s4', text: 'Consider Interviewing.io if you want feedback from current engineers at major tech companies. The higher cost is justified at this stage of preparation when calibration quality matters most.' },
              ],
            },
            {
              id: 'p4-w04-t2',
              type: 'practice',
              text: 'Complete 1 mock system design interview. Use Interviewing.io\'s paid system design service (interviewing.io) or find a senior engineer willing to run a realistic session.',
              links: [
                { label: 'Interviewing.io', url: 'https://interviewing.io' },
              ],
              steps: [
                { id: 'p4-w04-t2-s1', text: 'Book the session with a senior engineer if possible. The quality differential between a peer mock and a senior-engineer mock is significant — one gives you a realistic calibration, the other gives you encouragement.' },
                { id: 'p4-w04-t2-s2', text: 'Before the session: review your written system designs from p4-w02-t3. Go in with your 5-step framework refreshed and your tradeoff language ready.' },
                { id: 'p4-w04-t2-s3', text: 'During the session: when the interviewer pushes back on a design choice, engage with the tradeoff rather than defending your original answer. "Good point — if we need stronger consistency, we could use X instead of Y, with the tradeoff that..."' },
                { id: 'p4-w04-t2-s4', text: 'Debrief within 30 minutes: what was asked, what went well, what did the interviewer challenge, what would you do differently? Use this immediately to plan the next session.' },
              ],
            },
            {
              id: 'p4-w04-t3',
              type: 'practice',
              text: 'Complete 1 mock behavioral interview. Record it. Critique your LP story delivery — pacing, specificity of actions, strength of results, whether you said "we" instead of "I."',
              steps: [
                { id: 'p4-w04-t3-s1', text: 'Find a mock behavioral partner: a peer preparing for interviews, a LinkedIn contact who has done Amazon loops, or use Pramp (which includes behavioral for some session types).' },
                { id: 'p4-w04-t3-s2', text: 'Ask them to use actual Amazon LP question formats: "Tell me about a time you disagreed with a decision," "Describe a situation where you had to deliver bad news," "When have you simplified a process?" — not generic questions.' },
                { id: 'p4-w04-t3-s3', text: 'Record the session. After: count how many times you said "we" instead of "I," how many results were unquantified, and whether any answer exceeded 4 minutes. These are the three most common behavioral failures.' },
                { id: 'p4-w04-t3-s4', text: 'If stories are not landing: the most common cause is an underdeveloped Action section. "I built a tool" is not enough — "I designed the schema, wrote the ETL, built the API, and coordinated rollout with the on-call team" is.' },
              ],
            },
            {
              id: 'p4-w04-t4',
              type: 'amazon',
              text: 'If you have not already applied internally, identify the specific role and prepare your internal application materials.',
              steps: [
                { id: 'p4-w04-t4-s1', text: 'Draft your internal transfer statement: 2–3 sentences explaining why you are transitioning to SDE, what you have done to prepare (projects, LeetCode, study), and what value your infrastructure background adds.' },
                { id: 'p4-w04-t4-s2', text: 'Update your resume to reflect software development work from your current role: IaC code, Python scripts in production, CI/CD pipelines built, APIs consumed or extended. Reframe operations work in development terms.' },
                { id: 'p4-w04-t4-s3', text: 'Identify your endorsers: who would write a positive internal reference? Ask them now — 6 weeks notice is better than 1 week notice when asking someone to invest time in supporting you.' },
                { id: 'p4-w04-t4-s4', text: 'If you have not scheduled a coffee chat with the hiring manager of your target role: do it this week. "I am planning to apply in 6–8 weeks and would love 20 minutes to understand what you are looking for" is legitimate and appreciated internally.' },
              ],
            },
          ],
          notes:
            'Schedule mock interviews in advance so you cannot cancel them. Treat them with the same preparation as real interviews. The goal is to get uncomfortable feedback now.',
        },
        {
          id: 'p4-w05',
          title: 'Week 73–74: Targeted weakness remediation',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p4-w05-t1',
              type: 'practice',
              text: 'Based on mock interview feedback: identify your 2 weakest areas and drill those specifically. Do not spread effort evenly — fix the things that are actually costing you.',
              steps: [
                { id: 'p4-w05-t1-s1', text: 'Review your mock interview debriefs from p4-w04 and your OA simulation notes from p4-w01. List every specific failure: "ran out of time on DP," "forgot scale estimation," "said \'we\' instead of \'I\' on 3 answers."' },
                { id: 'p4-w05-t1-s2', text: 'Rank by impact: which gap is most likely to cost you an offer? Fix that one first. A targeted 2-week sprint on your worst gap beats 2 weeks of general review.' },
                { id: 'p4-w05-t1-s3', text: 'If coding is weak: 30 focused LeetCode problems in the specific topic you are failing. Use Neetcode\'s topic-filtered playlists — they are the most efficient way to drill a single pattern.' },
                { id: 'p4-w05-t1-s4', text: 'If behavioral is weak: rewrite the failing STAR stories from scratch with specific actions and quantified results. The root cause is almost always in the Action and Result sections, not the Situation.' },
              ],
            },
            {
              id: 'p4-w05-t2',
              type: 'practice',
              text: 'LeetCode: push to 220 problems. Redo every problem you got wrong on the first attempt — not to memorize the answer but to understand the pattern well enough to recognize it in a novel problem.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p4-w05-t2-s1', text: 'Filter your LeetCode history by Wrong Answer and Time Limit Exceeded. Work through every one — your goal is to explain the pattern you missed well enough that you would catch it in a novel problem.' },
                { id: 'p4-w05-t2-s2', text: 'For each redo: write a one-sentence explanation of the insight you missed ("I used BFS when DFS was needed," "I didn\'t recognize the sliding window pattern"). Accumulate into a "lessons learned" doc — review it the night before each interview.' },
              ],
            },
            {
              id: 'p4-w05-t3',
              type: 'learn',
              text: 'If graph or DP problems are weak spots, run a focused 2-week sprint on those specifically. These are the most common gaps for candidates at this stage.',
              links: [
                { label: 'Neetcode practice', url: 'https://neetcode.io/practice' },
              ],
              steps: [
                { id: 'p4-w05-t3-s1', text: 'Graph review: BFS (shortest path, level-order), DFS (connected components, cycle detection, topological sort), Dijkstra\'s (weighted shortest path), Union-Find (disjoint sets). If any of these feels uncertain, drill it specifically.' },
                { id: 'p4-w05-t3-s2', text: 'DP review: 1D DP (House Robber, Climbing Stairs), 2D DP (LCS, Edit Distance), knapsack variants (0/1, unbounded), state machine DP (Best Time to Buy Stock with cooldown). Identify which sub-type is your gap.' },
                { id: 'p4-w05-t3-s3', text: 'Do 5–10 problems specifically tagged with your weak topic on LeetCode. Consistency within a single pattern is what builds the recognition that makes interview problems feel familiar rather than novel.' },
              ],
            },
            {
              id: 'p4-w05-t4',
              type: 'practice',
              text: 'LeetCode running total: aim for 220 problems.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p4-w05-t4-s1', text: 'Verify running total at 220+. Between wrong-answer redos and new Amazon-tagged problems, this week should add 10–15 to your count.' },
              ],
            },
          ],
          notes:
            'Diagnosing which specific round is failing you is as important as the preparation itself. A candidate failing OA needs different work than one failing system design.',
        },
        {
          id: 'p4-w06',
          title: 'Week 75–76: Amazon internal application and external prep',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p4-w06-t1',
              type: 'amazon',
              text: 'Finalize your internal Amazon application. Submit through A to Z. Follow up directly with the hiring manager or recruiter — a direct message on Slack or email is appropriate and expected internally.',
              steps: [
                { id: 'p4-w06-t1-s1', text: 'Go to A to Z → Internal Job Board. Read the JD one final time and confirm your application materials use the same language the JD uses for key skills.' },
                { id: 'p4-w06-t1-s2', text: 'Submit. Do not wait for perfect timing — applications that arrive early in a requisition cycle are often reviewed more carefully than ones that arrive late.' },
                { id: 'p4-w06-t1-s3', text: 'Follow up via Slack: "Hi [name] — I just submitted my application for [role]. I\'m highly interested and happy to share my GitHub portfolio or schedule a preliminary call at your convenience."' },
                { id: 'p4-w06-t1-s4', text: 'Track the status in A to Z. If no movement after 2 weeks, send one follow-up message. Internal processes vary — some move in 1–2 weeks, others take 4–6 weeks.' },
              ],
            },
            {
              id: 'p4-w06-t2',
              type: 'amazon',
              text: 'Update your Amazon internal profile to emphasize software development contributions: IaC code you wrote, Python tools you shipped, AWS automation you built, CI/CD pipelines you designed.',
              steps: [
                { id: 'p4-w06-t2-s1', text: 'Open your Amazon internal profile or brag doc. Reframe accomplishments using software development vocabulary: "built a Python tool" instead of "automated a process," "designed the data model" instead of "set up the database."' },
                { id: 'p4-w06-t2-s2', text: 'Add your GitHub projects explicitly: list your FastAPI project and LLM tool by name, include the GitHub URL, and write 1–2 sentences on what each does and what stack it uses.' },
                { id: 'p4-w06-t2-s3', text: 'Quantify: not "lines of code" but "deployed to production serving X requests/day," "reduced manual work by Y hours/week," "passed X unit tests with Y% coverage."' },
              ],
            },
            {
              id: 'p4-w06-t3',
              type: 'amazon',
              text: 'Ask your manager for active support: "I have been preparing for an SDE transition and I am ready to apply. Would you be willing to advocate for me internally?" Having manager support changes the internal transfer dynamic.',
              steps: [
                { id: 'p4-w06-t3-s1', text: 'Schedule a dedicated 1:1 with your manager specifically to discuss the transition. Do not mention it for the first time in a regular standup — give it the dedicated space it deserves.' },
                { id: 'p4-w06-t3-s2', text: 'Frame it concretely: "I have been preparing for an SDE transition for 18 months. I have shipped [projects], completed [X LeetCode], and I\'m ready to apply. I\'m asking for your active support."' },
                { id: 'p4-w06-t3-s3', text: 'Ask specifically: "Would you be willing to reach out to the hiring manager of [team] on my behalf?" A manager-to-manager call is significantly more effective than a cold application even internally.' },
                { id: 'p4-w06-t3-s4', text: 'If your manager is not supportive: note that you can still apply without their endorsement. But having this conversation now means no surprises when transfer offers arrive — and it sometimes converts skeptics who see your preparation.' },
              ],
            },
            {
              id: 'p4-w06-t4',
              type: 'build',
              text: 'External prep: identify 5–10 target companies where your infrastructure and cloud background is a specific advantage — cloud tooling companies, DevOps platforms, observability tools, AWS partners.',
              steps: [
                { id: 'p4-w06-t4-s1', text: 'Identify 5–10 target companies where cloud, AWS, and IaC expertise is directly valued: Datadog, HashiCorp, Pulumi, Grafana Labs, Cloudflare, Fastly, Snowflake, Databricks, PagerDuty, or AWS itself.' },
                { id: 'p4-w06-t4-s2', text: 'Research each company\'s engineering blog and recent job postings. What stack? What problems? This lets you write a cover letter opener that does not look auto-generated.' },
                { id: 'p4-w06-t4-s3', text: 'Check LinkedIn for first-degree connections at each target. Ask directly: "I\'m applying to [company] and would love a referral if you think it\'s a good fit." A specific ask is easier to say yes to than a vague one.' },
                { id: 'p4-w06-t4-s4', text: 'Build a tracking spreadsheet: company, role, date applied, recruiter contact, status, follow-up date. Without tracking, the job search becomes chaotic and follow-up opportunities are missed.' },
              ],
            },
          ],
        },
        {
          id: 'p4-w07',
          title: 'Week 77–80: Final preparation and mock interview blitz',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p4-w07-t1',
              type: 'practice',
              text: '4 more full mock interviews across these two weeks: mix of coding, system design, and behavioral. Aim for at least 1 of each type.',
              links: [
                { label: 'Pramp', url: 'https://www.pramp.com' },
                { label: 'Interviewing.io', url: 'https://interviewing.io' },
              ],
              steps: [
                { id: 'p4-w07-t1-s1', text: 'Schedule all 4 sessions at the start of the week so you cannot defer them. Target: 2 coding (Pramp or Interviewing.io), 1 system design (Interviewing.io), 1 behavioral (peer or coach).' },
                { id: 'p4-w07-t1-s2', text: 'Before each session: review your debrief from the previous round of mocks. The improvement should be visible — if you are making the same mistakes, diagnose the root cause rather than just repeating the practice.' },
                { id: 'p4-w07-t1-s3', text: 'After each session: write a 5-minute debrief. This is the highest-leverage 5 minutes of your preparation — it converts the experience into lessons rather than just additional practice repetitions.' },
              ],
            },
            {
              id: 'p4-w07-t2',
              type: 'practice',
              text: 'Full loop simulation: schedule 5 back-to-back mock interviews in a single day. This builds the mental stamina needed for a real Amazon loop (typically 5–6 rounds in one day). It will be exhausting — that is the point.',
              steps: [
                { id: 'p4-w07-t2-s1', text: 'Schedule 5 mock interviews on the same day, back-to-back with 15-minute breaks. Start at 9am, finish by 5pm. A real Amazon loop is 5–6 rounds in one day — physical and mental fatigue is part of what you are preparing for.' },
                { id: 'p4-w07-t2-s2', text: 'Composition: 2 coding, 1 system design, 1 behavioral, 1 mixed (coding + behavioral together). This mirrors actual Amazon loop structure.' },
                { id: 'p4-w07-t2-s3', text: 'After the day: note which round felt weakest when fatigued. In a real loop, manage energy — give your hardest round (usually system design for most candidates) the early morning slot when focus is highest.' },
                { id: 'p4-w07-t2-s4', text: 'Logistics prep: clear your calendar, have water and snacks ready, test video/audio and the interview platform the night before. Treat it with the same professionalism as a real interview day.' },
              ],
            },
            {
              id: 'p4-w07-t3',
              type: 'practice',
              text: 'LeetCode: work through 10 Amazon-tagged Hard problems. You do not need to solve them all independently — understanding the pattern and approach after seeing the solution still builds recognition ability.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p4-w07-t3-s1', text: 'Filter LeetCode by Amazon tag + Hard difficulty. For each: attempt independently for 30 minutes, then read the solution, then implement it from scratch without looking. Three stages — not one.' },
                { id: 'p4-w07-t3-s2', text: 'Hard problems are not expected to be solved independently on first attempt — that is expected. The value is in understanding the pattern. Can you recognize it as a variant of a Medium you know? That recognition is what you are building.' },
                { id: 'p4-w07-t3-s3', text: 'Flag the 3 Hard problems that felt most approachable after reading the solution. Revisit these the week before your first real interview — they represent the ceiling of your current skill range.' },
              ],
            },
            {
              id: 'p4-w07-t4',
              type: 'amazon',
              text: 'External applications: begin applying to your target company list. Prioritize applications where you have referrals. A referral gets your resume seen — it does not get you the job, but it clears the first filter.',
              steps: [
                { id: 'p4-w07-t4-s1', text: 'Begin applying to your target company list from p4-w06-t4. Prioritize applications where you have referrals — they meaningfully increase the chance of a human reading your resume.' },
                { id: 'p4-w07-t4-s2', text: 'Tailor each application: change the opening paragraph to reference something specific about that company (a product you use, a blog post you read, a problem they are solving). Generic openers get screened first.' },
                { id: 'p4-w07-t4-s3', text: 'Target 2–3 applications per week at this stage — quality over volume. 45 minutes on one tailored application beats 10 minutes on 5 generic ones.' },
              ],
            },
          ],
          notes:
            'Phase 4 checkpoint: if you are consistently getting through mock coding rounds, holding your own in system design, and delivering LP stories fluently — start applying.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PHASE 5 — Apply and Iterate (Weeks 81–87+, 14 tasks)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'phase-5',
      number: 5,
      title: 'Apply and Iterate',
      duration: 'Month 21+',
      length: 'Ongoing',
      hoursPerWeek: '~10 hrs/week',
      goal:
        'The job search is its own skill. Treat rejection as diagnostic data, not personal failure. Keep technical skills sharp — they decay faster than most people expect. Most candidates at this preparation level land a role within 2–4 months of serious application.',
      checkpoint:
        'Are you reaching final rounds consistently? If yes, focus on closing. If not, diagnose exactly which round is failing and return to the relevant phase for a targeted 2-week remediation sprint before continuing to apply.',
      weeks: [
        {
          id: 'p5-w01',
          title: 'Week 81–83: Launch — internal Amazon applications first',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p5-w01-t1',
              type: 'amazon',
              text: 'Submit internal application(s) through A to Z. Follow up with hiring managers you have connected with over previous phases. Internal transfers can move to a loop within 2–3 weeks of application.',
              steps: [
                { id: 'p5-w01-t1-s1', text: 'If you have not submitted yet: go to A to Z Jobs now. If already submitted: check status and send a follow-up to the hiring manager if it has been more than 2 weeks without movement.' },
                { id: 'p5-w01-t1-s2', text: 'Internal timeline: expect 2–3 weeks for initial review, 1–2 more weeks for a phone screen or loop schedule. Total process is typically 4–8 weeks from application to offer.' },
                { id: 'p5-w01-t1-s3', text: 'Apply to 2–3 internal roles simultaneously if they are genuine fits. Internal recruiters understand multi-role applications — it does not penalize you.' },
              ],
            },
            {
              id: 'p5-w01-t2',
              type: 'build',
              text: 'Final GitHub polish: pin your 2 best projects, ensure CI/CD badges are green, READMEs are complete, and deployed environments are live and accessible. A hiring manager clicking a dead link loses confidence immediately.',
              steps: [
                { id: 'p5-w01-t2-s1', text: 'Pin your 2 best projects on your GitHub profile. These are the first things a hiring manager sees — make sure they represent your strongest work, not your oldest.' },
                { id: 'p5-w01-t2-s2', text: 'Check every CI badge. A red or missing badge signals code quality issues before the hiring manager reads a single line. Fix any failing pipelines immediately.' },
                { id: 'p5-w01-t2-s3', text: 'Click every link in both READMEs: deployed URL, API docs link, any external service. Dead links cost you immediately.' },
                { id: 'p5-w01-t2-s4', text: 'Write a GitHub profile README (root-level README.md in a repo matching your username): 3–4 sentences about your transition, links to your 2 projects, your stack, and what you are building toward.' },
              ],
            },
            {
              id: 'p5-w01-t3',
              type: 'practice',
              text: 'Maintain LeetCode: minimum 5 problems per week without exception. Skills decay within 2–3 weeks of stopping, and OAs can arrive on short notice.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p5-w01-t3-s1', text: 'Minimum 5 problems per week, every week, without exception. An OA can arrive 1–2 weeks after application submission and give only 5 days to complete. Do not let skills decay while waiting for responses.' },
              ],
            },
            {
              id: 'p5-w01-t4',
              type: 'amazon',
              text: 'Prepare your Amazon loop logistics: know your schedule availability for the next 4 weeks, have LP stories refreshed and practiced, review your system design frameworks.',
              steps: [
                { id: 'p5-w01-t4-s1', text: 'Identify your available days for a full-day loop over the next 4 weeks. Amazon loops are typically 5–6 rounds in one day — block a full day and do not schedule anything else.' },
                { id: 'p5-w01-t4-s2', text: 'LP stories: re-read all 16 STAR stories and deliver 3–4 of them out loud. Stories fade faster than you expect — a 4-week gap without rehearsal shows in interview pacing.' },
                { id: 'p5-w01-t4-s3', text: 'System design warm-up: talk through URL shortener or Twitter feed design out loud for 20–30 minutes. The frameworks are easy to access when fresh and easy to forget under interview stress.' },
                { id: 'p5-w01-t4-s4', text: 'Technical setup: test video, audio, and screen sharing. For virtual loops, use a wired connection if possible and test the interview platform (Chime, Zoom, CodePair) the day before.' },
              ],
            },
          ],
        },
        {
          id: 'p5-w02',
          title: 'Week 84–86: External applications — targeted outreach',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p5-w02-t1',
              type: 'build',
              text: 'Apply to 3–5 external roles per week. Quality over volume — tailor the first two paragraphs of your application to each role rather than sending identical applications.',
              steps: [
                { id: 'p5-w02-t1-s1', text: '3–5 tailored applications per week. "Tailored" means the first paragraph references something specific to that company — not a generic statement about your background.' },
                { id: 'p5-w02-t1-s2', text: 'Prioritize companies from your target list where you have referrals. Referral applications are read by a human; most cold applications are not.' },
                { id: 'p5-w02-t1-s3', text: 'Update your tracking spreadsheet after each application. Set a 2-week follow-up reminder — if no response, send a polite follow-up to the recruiter or hiring manager.' },
              ],
            },
            {
              id: 'p5-w02-t2',
              type: 'build',
              text: 'Build in public: write one LinkedIn post about a project you built or something you learned during this transition. Inbound interest from recruiters is meaningfully higher for candidates with visible technical activity.',
              steps: [
                { id: 'p5-w02-t2-s1', text: 'Write one LinkedIn post about something technical you built, learned, or solved. Concrete beats abstract: "I built a rate limiter and learned why Nginx does it in C" beats "I\'m learning system design."' },
                { id: 'p5-w02-t2-s2', text: 'Post Tuesday–Thursday, 8–10am or 5–7pm for maximum reach. Engage with comments for the first hour — LinkedIn\'s algorithm rewards early engagement.' },
                { id: 'p5-w02-t2-s3', text: 'One high-quality post per week beats daily low-engagement posts. Quality = specificity + something the reader can actually learn or apply themselves.' },
              ],
            },
            {
              id: 'p5-w02-t3',
              type: 'amazon',
              text: 'Pursue referrals aggressively. You are inside Amazon — you have more referral access than any external candidate. Ask colleagues in SDE roles at other Amazon teams if they would refer you.',
              steps: [
                { id: 'p5-w02-t3-s1', text: 'Make a list of every Amazon employee you know in an SDE or adjacent technical role. Do not filter by whether you think they will say yes — make the list first, ask second.' },
                { id: 'p5-w02-t3-s2', text: 'Send a specific ask: "I\'m applying to [role] on [team]. Would you be willing to submit an internal referral? I\'ve been preparing for 18 months and have two deployed projects I can share." Specific asks are easier to say yes to than vague ones.' },
                { id: 'p5-w02-t3-s3', text: 'Make it easy: send the role link, a 2-sentence description of your background, and your GitHub URL in the same message. The less work required of them, the more likely they are to help.' },
              ],
            },
            {
              id: 'p5-w02-t4',
              type: 'practice',
              text: 'LeetCode: keep the streak. OAs often arrive 1–2 weeks after application and give little warning.',
              links: [
                { label: 'LeetCode', url: 'https://leetcode.com' },
              ],
              steps: [
                { id: 'p5-w02-t4-s1', text: 'Keep the streak. 5 problems per week. OAs arrive 1–2 weeks after application submission and typically give only 5–7 days to complete. Do not let skills decay between submitting and hearing back.' },
              ],
            },
          ],
          notes:
            'SDE-adjacent titles are also legitimate targets: Systems Development Engineer, Platform Engineer, DevOps Engineer at software companies. These often provide a path to an SDE transfer within 12–18 months.',
        },
        {
          id: 'p5-w03',
          title: 'Week 87+: Iterate based on pipeline feedback',
          hours: '10 hrs',
          tasks: [
            {
              id: 'p5-w03-t1',
              type: 'practice',
              text: 'If failing OA: return to Phase 2 for a focused 2-week DSA sprint. Drill the specific problem types that appeared. The OA is a skills test — the gap is in LeetCode preparation.',
              steps: [
                { id: 'p5-w03-t1-s1', text: 'Identify the problem types that appeared in the OA you failed. Check Blind or LeetCode discuss for recent OA reports, or recall your own experience. This tells you specifically which patterns to drill.' },
                { id: 'p5-w03-t1-s2', text: 'Run a 2-week sprint: 5–8 problems per day in the gap area, timed. Quantity matters during a remediation sprint — pattern recognition is a volume game.' },
                { id: 'p5-w03-t1-s3', text: 'Take another 90-minute OA simulation (2 problems, no hints) at the end of the sprint. If you pass cleanly, resume applications. If not, drill another week before reapplying.' },
              ],
            },
            {
              id: 'p5-w03-t2',
              type: 'practice',
              text: 'If failing phone screen: more mock interviews, specifically timed coding with verbal explanation. The phone screen tests the same skills as OA but adds communication — you need to think out loud while solving.',
              steps: [
                { id: 'p5-w03-t2-s1', text: 'Phone screen adds one element OA does not: verbal explanation while coding. If you are solving problems but failing phone screens, the gap is communication, not algorithms.' },
                { id: 'p5-w03-t2-s2', text: 'Drill: solve 10 LeetCode Mediums out loud. Record yourself. Listen for: long silences, jumping to code before stating an approach, not explaining complexity, not handling edge cases verbally before coding.' },
                { id: 'p5-w03-t2-s3', text: 'Schedule 2 additional Pramp sessions focused on communication. Ask your partner to call out any silence longer than 10 seconds — that is how real interviewers experience it.' },
              ],
            },
            {
              id: 'p5-w03-t3',
              type: 'practice',
              text: 'If failing system design: return to Phase 3 system design weeks. Record yourself and identify where the communication breaks down — usually requirements gathering or tradeoff articulation.',
              steps: [
                { id: 'p5-w03-t3-s1', text: 'Most common failure modes: jumping to solution before gathering requirements; shallow coverage of everything with no depth on anything; failing to state tradeoffs explicitly; not incorporating interviewer pushback mid-session.' },
                { id: 'p5-w03-t3-s2', text: 'Record yourself doing 2 full designs. Audit specifically: did you ask 3+ clarifying questions before drawing? Did you state at least 2 explicit tradeoffs? Did you engage productively when the interviewer pushed back?' },
                { id: 'p5-w03-t3-s3', text: 'Book one more Interviewing.io system design session after the sprint. External feedback from a senior engineer is the fastest calibration available — it is worth the cost at this stage.' },
              ],
            },
            {
              id: 'p5-w03-t4',
              type: 'amazon',
              text: 'If failing behavioral (LP) rounds: your STAR stories are either too vague, too short, or saying "we" instead of "I." Record yourself delivering each story and audit every answer.',
              steps: [
                { id: 'p5-w03-t4-s1', text: 'Behavioral failure is almost always one of three things: (1) "we" instead of "I" throughout, (2) vague actions ("I worked on it") with no specific steps, (3) weak or unquantified results.' },
                { id: 'p5-w03-t4-s2', text: 'Audit every STAR story with 3 questions: (1) Does every action sentence start with "I" and describe a specific decision or step? (2) Is the result a number, percentage, or concrete outcome? (3) Is the total story 2–3 minutes spoken?' },
                { id: 'p5-w03-t4-s3', text: 'Rewrite the 3–5 weakest stories from scratch. Record yourself delivering them. Pass the same 3-question audit on the recording before resuming applications.' },
              ],
            },
            {
              id: 'p5-w03-t5',
              type: 'build',
              text: 'If getting to final rounds but not closing: add a third project to your portfolio in a domain the target company cares about. Consider whether LP stories are differentiated enough — generic stories are easy to forget.',
              steps: [
                { id: 'p5-w03-t5-s1', text: 'If reaching final rounds but not receiving offers: ask for feedback. Some companies will give it. If you get it, use it specifically — "your system design tradeoff articulation was weak" tells you exactly where to invest.' },
                { id: 'p5-w03-t5-s2', text: 'Build a third portfolio project in a domain the target company specifically cares about: observability-adjacent for Datadog, data-pipeline adjacent for Snowflake. Domain relevance makes your portfolio feel intentional, not generic.' },
                { id: 'p5-w03-t5-s3', text: 'LP story audit: are your stories differentiated? Two "I automated something" stories across different LPs blend together in the debrief. Hiring managers discuss candidates after loops — memorable specifics help.' },
              ],
            },
            {
              id: 'p5-w03-t6',
              type: 'amazon',
              text: 'If Amazon internal stalls: do not wait. Run external applications in parallel. Internal and external pipelines can and should run simultaneously. Use each interview as practice for the others.',
              steps: [
                { id: 'p5-w03-t6-s1', text: 'If internal Amazon has stalled (no response after 3 weeks, or rejected): do not stop external applications. Internal and external pipelines must run simultaneously — waiting for one means losing weeks of momentum.' },
                { id: 'p5-w03-t6-s2', text: 'Apply to 2–3 different internal Amazon teams. One team\'s rejection does not affect another team\'s process — Amazon is large enough that multiple simultaneous internal applications are expected and accepted.' },
                { id: 'p5-w03-t6-s3', text: 'Each external interview is practice for Amazon; each Amazon interview is practice for external. More reps across more companies compound — parallel pipelines make you better at interviewing faster.' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default PLAN;
