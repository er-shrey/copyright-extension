const vscode = require('vscode');
const os = require("os");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('developer-copyright.copyrightAdd', function () {
		let comment_start = '';
		let comment_end = '';
		let file_extension = '';
		let date = new Date();
		let year = date.getFullYear();
		let copyright_text = `\
======================= START OF LICENSE NOTICE =======================
  Copyright (C) ${year} ${os.userInfo().username}. All Rights Reserved\n
  NO WARRANTY. THE PRODUCT IS PROVIDED BY DEVELOPER "AS IS" AND ANY
  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL DEVELOPER BE LIABLE FOR
  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
  OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE PRODUCT, EVEN
  IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
======================== END OF LICENSE NOTICE ========================
  Primary Author: ${os.userInfo().username}\n`;
		let copyright_position = new vscode.Position(0, 0);
		const editor = vscode.window.activeTextEditor
		if ( !editor ) {
			vscode.window.showInformationMessage( 'No editor is active' )
			return
		}
		file_extension = editor.document.uri.fsPath.split('.').pop();
		switch (file_extension.toLowerCase()) {
			case 'js': comment_start = '/*\n'; comment_end='\n*/\n'; break;
			case 'java': comment_start = '/*\n'; comment_end='\n*/\n'; break;
			case 'c': comment_start = '/*\n'; comment_end='\n*/\n'; break;
			case 'cpp': comment_start = '/*\n'; comment_end='\n*/\n'; break;
			case 'go': comment_start = '/*\n'; comment_end='\n*/\n'; break;
			case 'css': comment_start = '/*\n'; comment_end='\n*/\n'; break;
			case 'html': comment_start = '<!--\n'; comment_end='\n-->\n'; break;
			case 'py': comment_start = '\"\"\"\n'; comment_end='\n\"\"\"\n'; break;
			case 'txt': comment_start = '\n'; comment_end='\n'; break;
			default: comment_start = '/*\n'; comment_end='\n*/\n';
		}
		if (file_extension != '') {
			editor.edit( ed => {
				ed.insert(copyright_position, comment_start + copyright_text + comment_end);
			});
			vscode.window.showInformationMessage(`Copyright is added to your ${file_extension} file`);
		} else {
			vscode.window.showInformationMessage('File not Supported yet');
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
