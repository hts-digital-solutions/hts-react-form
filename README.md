<h1>hts-react-form</h1>
<p>A simple and easy form for your react project.</p>

<h2>Install</h2>
<code>
npm i hts-react-form
</code>
<br/>
<code>
yarn add hts-react-form
</code>

<h2>Usages<h2>

<table>
<thead>
<tr>
<th>Attributes Name</th>
<th>Attributes Value</th>
</tr>
</thead>

<tbody>
<tr>
<td>controls</td>
<td>
Array of input control object
<code>
{
    label: string
    name: string
    type: string
    placeholder: string
    value: any
    onChange: function
    styles?: React.CSSProperties
    className?: string
    required?: boolean
    options?: {
        label: string
        value: string
    }[]
}
</code>
</td>
</tr>

<tr>
<td>actionControl</td>
<td>
Object of action details
<code>
    label: string
    onSubmit: function
    styles?: React.CSSProperties
    className?: string
</code>
</td>
</tr>

<tr>
<td>forgetPassword</td>
<td>
Object of forgot password option or false
<code>
    label: string
    onClick: function
    styles?: React.CSSProperties
    className?: string
</code>
</td>
</tr>

<tr>
<td>googleLogin</td>
<td>
Object of google button or false
<code>
    label: string
    onClick: any
    styles: React.CSSProperties
    className: string
</code>
</td>
</tr>

<tr>
<td>githubLogin</td>
<td>
Object of github button or false
<code>
    label: string
    onClick: function
    styles?: React.CSSProperties
    className?: string
</code>
</td>
</tr>

<tr>
<td>facebookLogin</td>
<td>
Object of facebook button or false
<code>
    label: string
    onClick: function
    styles?: React.CSSProperties
    className?: string
</code>
</td>
</tr>

<tr>
<td>labelClassName</td>
<td>
Custom classes for label
</td>
</tr>

<tr>
<td>labelStyles</td>
<td>
Use react styles properties instead to override styles
</td>
</tr>

<tr>
<td>styles</td>
<td>
Use react styles properties instead to override form container styles
</td>
</tr>

<tr>
<td>className</td>
<td>
Custom classes for form container
</td>
</tr>

</tbody>

</table>
